package com.anm.init.service.impl;

import com.anm.init.controller.response.ExampleResponse;
import com.anm.init.mapper.ExampleMapper;
import com.anm.init.repository.ExampleRepository;
import com.anm.init.service.ExampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExampleServiceImpl implements ExampleService {

    private final ExampleRepository exampleRepository;
    private final ExampleMapper exampleMapper;

    @Autowired
    public ExampleServiceImpl(final ExampleRepository exampleRepository,
                              final ExampleMapper exampleMapper) {
        this.exampleRepository = exampleRepository;
        this.exampleMapper = exampleMapper;
    }

    @Override
    public List<ExampleResponse> readExampleData() {
        return exampleRepository.findAll().stream()
                .map(exampleMapper::mapEntityToResponse)
                .collect(Collectors.toList());
    }
}
