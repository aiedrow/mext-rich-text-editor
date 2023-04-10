function createEditor(textareaId) {
  const textArea = document.getElementById(textareaId);
  textArea.style.color = "#000";
  textArea.style.height = "200px";
  textArea.style.background = "#fff";
  textArea.style.position = "relative";
  textArea.style.display = "none";
  textArea.style.width="100%";

  var editor = document.createElement("div");
  editor.className = "jsEditor";
  textArea.parentNode.insertBefore(editor, textArea.nextSibling);

  var toolbar = document.createElement("div");
  toolbar.className = "jsEditor-toolbar";
  editor.appendChild(toolbar);
  
  var result = document.createElement("div");
  result.className = "jsEditor-Editor";
  result.style.width="100%";
  result.style.height="200px";
  result.style.padding="0px";
  result.style.display="block";
  result.style.background="#fff";
  result.style.color="#000";
  result.style.overflow="scroll";
  result.contentEditable = true;
  editor.appendChild(result);
  
  const boldBtn = document.createElement("buttonx");
  boldBtn.setAttribute('title', "Bold");
  boldBtn.innerHTML = "B";
  boldBtn.onclick = () => {
     applyTag(textArea,"b");
     updateResult(result,textArea);
  };toolbar.appendChild(boldBtn);
  
  const italicBtn = document.createElement("buttonx");
  italicBtn.setAttribute('title', "Italic");
  italicBtn.innerHTML = "<i>I</i>";
  italicBtn.onclick = () => {
     applyTag(textArea,"i");
     updateResult(result,textArea);
  };toolbar.appendChild(italicBtn);
  
  const underlineBtn = document.createElement("buttonx");
  underlineBtn.setAttribute('title', "Underline");
  underlineBtn.innerHTML = "<u>U</u>";
  underlineBtn.onclick = () => {
     applyTag(textArea,"u");
     updateResult(result,textArea);
  };toolbar.appendChild(underlineBtn);
  
  const headingBtn = document.createElement("buttonx");
  headingBtn.setAttribute('title', "H1");
  headingBtn.innerHTML = "H1";
  headingBtn.onclick = () => {
     applyTag(textArea,"h1");
     updateResult(result,textArea);
  };toolbar.appendChild(headingBtn);
  
  const headingTBtn = document.createElement("buttonx");
  headingTBtn.setAttribute('title', "H2");
  headingTBtn.innerHTML = "H2";
  headingTBtn.onclick = () => {
     applyTag(textArea,"h1");
     updateResult(result,textArea);
  };toolbar.appendChild(headingTBtn);
  
  const listBtn = document.createElement("buttonx");
  listBtn.setAttribute('title', "List");
  listBtn.innerHTML = "≔";
  listBtn.onclick = () => {
     applyTag(textArea,"li");
     updateResult(result,textArea);
  };toolbar.appendChild(listBtn);
  
  const strBtn = document.createElement("buttonx");
  strBtn.setAttribute('title', "Strike");
  strBtn.innerHTML = "S";
  strBtn.onclick = () => {
     applyTag(textArea,"s");
     updateResult(result,textArea);
  };toolbar.appendChild(strBtn);
  
  const imgBtn = document.createElement("buttonx");
  imgBtn.setAttribute('title', "Add Image");
  imgBtn.innerHTML = "📸";
  imgBtn.onclick = () => {
  const Vurl = prompt('Enter the URL of the Image:');
  if(Vurl){addtagAtr(textArea,"img","src",Vurl)
  updateResult(result,textArea);}
  };toolbar.appendChild(imgBtn);
  
  
  const linkBtn = document.createElement("buttonx");
  linkBtn.setAttribute('title', "Add Link");
  linkBtn.innerHTML = "🔗";
  linkBtn.onclick = () => {
  const Vurl = prompt('Enter the URL of the Link:');
  if(Vurl){addtagAtr(textArea,"a","href",Vurl)
  updateResult(result,textArea);}
  };toolbar.appendChild(linkBtn);
  
  const vidBtn = document.createElement("buttonx");
  vidBtn.setAttribute('title', "Add Video");
  vidBtn.innerHTML = "▸";
  vidBtn.onclick = () => {
  const Vurl = prompt('Enter the URL of the Video:');
  if(Vurl){addtagAtr(textArea,"iframe","src",Vurl)
  updateResult(result,textArea);}
  };toolbar.appendChild(vidBtn);
    
  const cdLBtn = document.createElement("buttonx");
  cdLBtn.setAttribute('title', "Show Code");
  cdLBtn.innerHTML = "⌨";
  cdLBtn.onclick = () => {
     if(textArea.style.display === "none"){textArea.style.display = "block";result.style.display = "none";}else{textArea.style.display = "none";result.style.display = "block";}
  };toolbar.appendChild(cdLBtn);
  


  textArea.addEventListener("input", function(event) {updateResult(result,textArea);});
  result.addEventListener("input", function(event) {updateText(result,textArea);});
  
}

function updateResult(result,textArea){result.innerHTML = HTMLEntity(textArea.value)+" ";pushConsole(textArea.value);}
function updateText(result,textArea){textArea.value = HTMLEntity(result.innerHTML)+" ";pushConsole(textArea.value);}

function pushConsole(text){
    console.clear();
    console.log(text);
}

function applyTag(textArea,l){
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = textArea.value.substring(start, end);
    const len = selectedText.length; 
    if(selectedText==''){const selectedText = textArea.value;}
    textArea.value = "<"+l+">"+ textArea.value.substring(end,len) +"</"+l+">"+" ";
}

function addtagAtr(textArea,tag,attr,src){
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = textArea.value.substring(start, end);
    const len = selectedText.length; 
    if(selectedText==''){const selectedText = textArea.value;}
    textArea.value = "<"+tag+" "+attr+"='"+src+"' style='max-width:100%;'>"+ textArea.value.substring(end,len) +"</"+tag+">"+" ";
}

function HTMLEntity(text){
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
}
