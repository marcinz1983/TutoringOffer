package com.anm.init.command;

import com.anm.init.repository.ExampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Priority;

@Component
@Priority(2)
public class ExampleReadCommand implements CommandLineRunner {

    private final ExampleRepository exampleRepository;

    @Autowired
    public ExampleReadCommand(final ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        exampleRepository.findAll()
                .forEach(example -> System.out.println(example.toString()));
    }
}
