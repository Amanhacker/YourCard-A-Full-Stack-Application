package com.card.payment.service;

import com.card.payment.domain.Payment;

import java.util.List;

public interface IPaymentService {

    boolean addPayment(Payment payment);

    List<Payment> getAllPaymentByUserId(String userId);
}
