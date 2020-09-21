package com.card.payment.service;

import com.card.payment.domain.Payment;
import com.card.payment.exception.UserNotFoundException;

import java.util.List;

public interface IPaymentService {

    boolean addPayment(Payment payment);

    List<Payment> getAllPaymentsByUserId(String userId) throws UserNotFoundException;

    List<Payment> getAllPaymentsByOutlet(String outletName);
}
