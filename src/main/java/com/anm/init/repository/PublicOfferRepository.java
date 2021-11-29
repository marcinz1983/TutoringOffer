package com.anm.init.repository;

import com.anm.init.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicOfferRepository extends JpaRepository<Offer, Long> {
}
