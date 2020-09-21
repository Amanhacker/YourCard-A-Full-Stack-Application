package com.card.payment.repository;

import com.card.payment.domain.CardUser;
import com.card.payment.domain.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface PaymentRepository extends MongoRepository<CardUser, String> {

    //This query is not working :(, empty list aa rahi hai
    @Query("{'Payment.outlet': {$in : [?0]}}")
    List<Payment> findAllPaymentsByOutlet(String outletName);
}
