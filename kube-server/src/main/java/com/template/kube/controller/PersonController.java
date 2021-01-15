package com.template.kube.controller;

import java.util.List;

import com.template.kube.model.Person;
import com.template.kube.repository.PersonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping("/test")
    public String get() {
        return "Hallo, Chris!";
    }

    @GetMapping("/persons")
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }
}
