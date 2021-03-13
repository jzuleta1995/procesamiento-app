package com.springboot.backend.procesamiento.app.service;

import java.util.List;
import com.springboot.backend.procesamiento.app.model.Client;

public interface IClientService {
	public List<Client> findAll();
	
	public Client save(Client client);
	
	public Client findById(Long id);
	
	public List<Client> findAllById(List<Long> ids);
	
	public List<Client> saveAll(List<Client> clients);
}
