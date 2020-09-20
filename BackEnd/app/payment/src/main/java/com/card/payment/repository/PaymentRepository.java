package com.card.payment.repository;

import com.card.payment.domain.CardUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepository extends MongoRepository<CardUser, String> {
}
