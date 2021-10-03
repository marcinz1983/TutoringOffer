package com.anm.init.repository;

import com.anm.init.model.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ExampleRepository extends JpaRepository<Example, Long> {
}
