package com.springboot.backend.procesamiento.app.dao;

import org.springframework.data.repository.CrudRepository;
import com.springboot.backend.procesamiento.app.model.Client;

public interface IClientDao extends CrudRepository<Client, Long> {
}
