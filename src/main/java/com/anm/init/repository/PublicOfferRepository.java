package com.anm.init.repository;

import com.anm.init.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PublicOfferRepository extends JpaRepository<Offer, Long> {

    List<Offer> findByFirstNameContainingOrLastNameContainingAllIgnoreCase(String string1, String string2);

    Optional<Offer> findByUuidEquals(UUID uuid);
}

