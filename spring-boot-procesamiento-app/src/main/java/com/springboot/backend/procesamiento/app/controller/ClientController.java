package com.springboot.backend.procesamiento.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.backend.procesamiento.app.model.Client;
import com.springboot.backend.procesamiento.app.service.IClientService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class ClientController {

	@Autowired
	private IClientService clientService;
	
	//Función para listar todos los clientes
	@GetMapping("/clients")
	public List<Client> findAll(){
		return clientService.findAll();
	}
	
	//Función para almacenar un nuevo cliente
	@PostMapping("/clients")
	@ResponseStatus(HttpStatus.CREATED)
	public Client create(@RequestBody Client client) {
		return clientService.save(client);
	}
	
	//Funcion para actualizar el estado de procesamiento de los clientes
	@PutMapping("/clients/{ids}")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Client> update(@PathVariable List<Long> ids) {
		List<Client> clients = clientService.findAllById(ids);
		
		clients.stream().forEach(clientUpdate -> {
			clientUpdate.setProcessed(true);
		});
		
		return (List<Client>) clientService.saveAll(clients);
	}
}
