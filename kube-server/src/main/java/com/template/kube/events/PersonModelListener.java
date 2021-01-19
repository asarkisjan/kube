package com.template.kube.events;

import com.template.kube.model.Person;
import com.template.kube.service.SequenceGeneratorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class PersonModelListener extends AbstractMongoEventListener<Person> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public PersonModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Person> event) {
        event.getSource().setId(sequenceGenerator.generateSequence(Person.SEQUENCE_NAME));
    }
}
