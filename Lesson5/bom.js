const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");


button.addEventListener("click", function() {
  let myChapter = input.value;
  input.value = "";

  const listChapter = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

 
  listChapter.appendChild(listText);
  listText.textContent = myChapter;
  listChapter.appendChild(listBtn);
  listBtn.textContent = "❌";
  list.appendChild(listChapter); 
 
  listBtn.addEventListener("click", function () {
    list.removeChild(listChapter);
  })
  
  input.focus();

})