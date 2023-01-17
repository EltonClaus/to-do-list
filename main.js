let textInput = document.querySelector("#textInput");
let result = document.querySelector(".result");
let abreModal = document.querySelector(".modal");
let editInput = document.querySelector("#editInput");
const arr = [];
let titleInput = "";
const arrNew = [];

function myFunction(e) {
    let idLine = e.id.split('___')[1];
    var project = document.querySelectorAll('[id*="zm_pp"]');

    project.forEach(projectElement => {
        var listId = projectElement.id.split('___')[1];

        if (idLine === listId) {
            
          console.log(projectElement.textContent);
        }
        editInput.value = projectElement.textContent; 
      });
     
      modal();
};

function createElement() {
  let id = Math.floor(Date.now()* Math.random()).toString(36);
        let templateHtml = `<div>
          <h3 id="zm_pp___${id}">${titleInput}</h3>
          <button class="edit-btn" id="btnEditar___${id}" onclick="myFunction(this)" >Editar</button>
          <button id="remove-btn">Excluir</button>
        </div>`

        result.innerHTML += templateHtml;

};

function clearInput() {
       textInput.value = "";
};

document.querySelector("#btnAdd").addEventListener("click", () => {
    textInput.value === "" ? alert("Digite sua tarefa") : stop = true;   

    if(textInput.value != "" ){
      
      const name = textInput.value;
      const randomId = Math.floor(Date.now() * Math.random()).toString(36)
    
      let List = {
        id: randomId,
        title: name
      };

      arr.push(List);
      localStorage.setItem("task", JSON.stringify(arr));
   

  }
      getLocalStorage();
      createElement();
      clearInput();
  
});

document.querySelector("#btnModal").addEventListener("click", () => {
    const arrNew =  JSON.parse(localStorage.getItem("task"));
        
});

function getLocalStorage() {
      const arrNew =  JSON.parse(localStorage.getItem("task"));
        arrNew.map((item) => {
            titleInput = item.title;  
      })

};

function modal(carregaModal) {
      let modal = document.querySelector("#carregaModal");

      modal.style.display = "block";
      document.body.style.overflow = "hidden";
};

function closeModal(closeModal) {
      let modal = document.querySelector("#carregaModal");

      modal.style.display = "none";
      document.body.style.overflow = "hidden";
};

