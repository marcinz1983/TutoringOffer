package com.anm.init.repository;

import com.anm.init.model.Offer;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicOfferRepository extends PagingAndSortingRepository<Offer, Long> {

}
