package com.template.kube;

import com.template.kube.model.Person;
import com.template.kube.repository.PersonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class KubeCommandLineRunner implements CommandLineRunner {
    
    @Autowired
    private PersonRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.deleteAll();

        repository.save(new Person("Chris", 235));
        repository.save(new Person("Artur", 785));
        repository.save(new Person("Halil", 445));
        repository.save(new Person("Christian", 345));
        repository.save(new Person("Robert", 674));
        repository.save(new Person("Hendrik", 523));
    }
}
