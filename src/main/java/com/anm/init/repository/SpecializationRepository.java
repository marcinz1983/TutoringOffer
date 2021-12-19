package com.anm.init.repository;

import com.anm.init.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SpecializationRepository extends JpaRepository<Specialization, Long> {

    List<Specialization> findByLongNameContainingOrShortNameContainingAllIgnoreCase(String string1, String string2);
}
