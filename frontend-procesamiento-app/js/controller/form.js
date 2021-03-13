/** Variables */
const btnList = $("#btn-list");
const btnClear = $("#btn-clear");
const btnForm = $("#btn-submit");
const form = $("form");

const clientService = new ClientService();
const ui = new Interfaz();

/** Funciones */
function saveClient(){
     var name = $("#name").val();
     var lastname = $("#lastname").val();
     var message = "";

     if(name != "" && lastname != ""){
          const client = new Client(name, lastname);
                 
          clientService.saveClient(client)
          .then(response => {
               if(response){
                    ui.saveSuccesful(response);
               }    
          })
          .catch(err => console.log(err));
     }else{
          if(name == ""){
               message = "El campo Nombre no debe estar vacío <br>";
          }

          if(lastname == ""){
               message += "El campo Apellido no debe estar vacío";
          }

          if(message.length > 0){
               ui.showMessage(message, "alert-danger");
          }
     }
}

/** Eventos */
$(document).ready(() => {

     btnList.click(() => location.href = 'index.html');

     btnClear.click(() =>form.trigger("reset"));

     btnForm.click((e) => {
          e.preventDefault();
          saveClient();
     });
});

