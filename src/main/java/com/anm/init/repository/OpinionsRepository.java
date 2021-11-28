package com.anm.init.repository;

import com.anm.init.model.Opinion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OpinionsRepository extends JpaRepository<Opinion, Long> {
}
