package com.anm.init.repository;

import com.anm.init.model.Opinion;
import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OpinionsRepository extends JpaRepository<Opinion, Long> {
    List<Opinion> findByOffer_Uuid(UUID Uuid);
    Opinion findByOffer_UuidEquals(UUID Uuid);
}
