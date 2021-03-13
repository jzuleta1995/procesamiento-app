package com.springboot.backend.procesamiento.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.backend.procesamiento.app.dao.IClientDao;
import com.springboot.backend.procesamiento.app.model.Client;

@Service
public class ClientServiceImpl implements IClientService {

	@Autowired
	private IClientDao clientDao;
	
	@Override
	@Transactional(readOnly=true)
	public List<Client> findAll() {
		return (List<Client>) clientDao.findAll();
	}

	@Override
	@Transactional
	public Client save(Client client) {
		return clientDao.save(client);
	}

	@Override
	@Transactional(readOnly=true)
	public Client findById(Long id) {
		return clientDao.findById(id).orElseThrow(null);
	}

	@Override
	@Transactional(readOnly=true)
	public List<Client> findAllById(List<Long> ids) {
		return (List<Client>) clientDao.findAllById(ids);
	}
	
	@Override
	@Transactional
	public List<Client> saveAll(List<Client> clients){
		return (List<Client>) clientDao.saveAll(clients);
	}

}
