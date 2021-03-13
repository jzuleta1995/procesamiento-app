class ClientService {
     constructor(){
          this.url = 'http://localhost:8080/api/clients';
     }

     /** Función para comunicarse con el servicio para traer todos los clientes */
     async getClients(){
          try{
               const response = await fetch(this.url);

               if(response.ok){
                    const clients = await response.json();

                    return clients;
               }else{
                    console.log("Error en respuesta");
               }
          }catch(error){
               console.log(error);
          }
     }

     /** Función para comunicarse con el servicio para traer almacenar un nuevo cliente */
     async saveClient(client){
          try{
               const config = {
                    method: 'POST',
                    headers: {
                         'accept': 'application/json',
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(client)
               }
     
               const response = await fetch(this.url, config);
               if(response.ok){
                    return response.json();
               }else{
                    console.log("Error en respuesta");
               }
          }catch(error){
               console.log(error);
          }
     }

      /** Función para comunicarse con el servicio para actualizar el estado de los clientes */
     async updateClients(ids){
          try{
               const config = {
                    method: 'PUT',
                    headers: {
                         'accept': 'application/json',
                         'Content-Type': 'application/json',
                    }
               }

               const response = await fetch(`${this.url + '/' + ids}`, config);
               if(response.ok){
                    return response.json();
               }else{
                    console.log("Error en respuesta");
               }
          }catch(error){
               console.log(error);
          }
     }
}