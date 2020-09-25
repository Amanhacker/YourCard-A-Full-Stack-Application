package com.card.payment.service;

import com.card.payment.domain.Payment;
import com.card.payment.exception.UserNotFoundException;

import java.util.List;

public interface IPaymentService {

    boolean addPayment(Payment payment);

    List<Payment> getAllPaymentsByUserId(String userId) throws UserNotFoundException;

    List<Payment> getAllPaymentsByOutlet(String userId, String outletName) throws UserNotFoundException;

    List<Payment> getAllPaymentsByCountry(String userId, String country) throws UserNotFoundException;

    List<Payment> getAllPaymentsByCategory(String userId, String category) throws UserNotFoundException;

    List<Payment> getAllPaymentsByCity(String userId, String city) throws UserNotFoundException;

    List<Payment> getAllPaymentsByYear(String userId, String year) throws UserNotFoundException;
}
