package com.anm.init.repository;

import com.anm.init.model.AppUser;
import com.anm.init.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Long> {


    Optional<Offer> findByUuidEquals(UUID uuid);
}
