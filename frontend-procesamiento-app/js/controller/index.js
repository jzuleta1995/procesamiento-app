//Variables
const btnForm = $("#btn-form");
const btnProcess = $("#btn-process");
var message = "";
var inputs;
var ids = [];

const clientService = new ClientService();
const ui = new Interfaz();

//Functions
function listClients(){
     clientService.getClients()
          .then(data => {
               if(data){
                    ui.loadClients(data);
                    this.checkedClients();
               }else{
                    alert("No hay información para mostrar!!");
               }
          })
          .catch(err => console.log(err));
}

function updateClients() {
     if (ids.length > 0) {
          clientService.updateClients(ids)
               .then(data => {
                    ui.updateSuccesful();
               })
               .catch(err => console.log(err));
     }else{
          alert("No hay ningún registro seleccionado!!");
     }
}

function checkedClients() {
     inputs = $("input[type='checkbox']");

     inputs.change((e) => {
          console.log(e.target.id);
          if (e.target.checked) {
               ids.push(e.target.id);
          } else {
               const indexIdRemove = ids.indexOf(e.target.id);
               ids.splice(indexIdRemove, 1);
          }
     });
}

function getParametersUrl(){
     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
     message = urlParams.get("message");

     if(message != null && message.length > 0){
          setTimeout(() => {
               location.href = 'index.html'
          }, 3000);

          ui.showMessage(message, "alert-success");
     }
}

//Events
$(document).ready(() => {
     getParametersUrl();

     listClients();
     
     btnForm.click(() => location.href = 'form.html');

     btnProcess.click(() => updateClients());    
});