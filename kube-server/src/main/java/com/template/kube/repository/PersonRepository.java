package com.template.kube.repository;

import com.template.kube.model.Person;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonRepository extends MongoRepository<Person, Long> {
    
}
