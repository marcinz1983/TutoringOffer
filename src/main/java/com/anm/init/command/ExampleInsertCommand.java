package com.anm.init.command;

import com.anm.init.model.Example;
import com.anm.init.repository.ExampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Priority;

@Component
@Priority(1)
public class ExampleInsertCommand implements CommandLineRunner {

    private final ExampleRepository exampleRepository;

    @Autowired
    public ExampleInsertCommand(final ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        exampleRepository.save(Example.builder()
                .withFirstName("Artur")
                .withLastName("Dudzik")
                .withCareer("fullstack dev")
                .build());
    }
}
