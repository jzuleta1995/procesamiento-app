/** Clase para interactuar con la interfaz gráfica */
class Interfaz {

     constructor() {
          this.init();
     }

     init() {
          this.loadClients();
     }

     loadClients(clients) {
          if (clients != undefined) {
               const tableBody = document.getElementById('tbody-clients > tr');

               if (tableBody) {
                    tableBody.remove();
               }

               var templateHTML = '';
               for (var [id, client] of Object.entries(clients)) {
                    templateHTML += `
                         <tr>
                              <th scope="row">${client.id}</th>
                              <td>${client.name}</td>
                              <td>${client.lastname}</td>
                              <td>
                              ${client.processed == false ? '<input type="checkbox"  id= ' + client.id + ' value= ' + client.processed + '/>' : 'Procesado</td>'}
                              
                         </tr>
                    `;
               }
               document.querySelector('#tbody-clients').innerHTML = templateHTML;
          }
     }

     saveSuccesful(client){
          var message = `El cliente ${client.name} ${client.lastname} ha sido creado exitosamente!`;
          window.location.href = `index.html?message=${message}`;
     }

     updateSuccesful(){
          var message = `Los clientes han sido procesados exitosamente!`;
          window.location.href = `index.html?message=${message}`;
     }

     showMessage(message, type){
          const alert = $(".alert");
          
          if(message.length > 0){
               setTimeout(() => {
                    alert.addClass("d-none");
                    alert.removeClass(type);
                    alert.empty();
               }, 5000);
               
               alert.removeClass("d-none");
               alert.addClass(type);
               alert.html(message);
          }
     }
}