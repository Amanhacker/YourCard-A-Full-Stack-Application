package com.card.payment.service;

import com.card.payment.domain.CardUser;
import com.card.payment.domain.Payment;
import com.card.payment.exception.UserNotFoundException;
import com.card.payment.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class PaymentServiceImpl implements IPaymentService {

    private PaymentRepository repository;
    @Autowired
    public  PaymentServiceImpl(PaymentRepository repository){
        this.repository = repository;
    }
    private CardUser cardUser = null;
    private List<Payment> paymentList = null;


    @Override
    public boolean addPayment(Payment payment) {
        int counter = 1;
        boolean status = false;
        cardUser = new CardUser();
        paymentList = new ArrayList<>();
        if (repository.existsById(payment.getCustomer())) {
            paymentList = repository.findById(payment.getCustomer()).get().getPaymentList();
            Iterator iterator = paymentList.iterator();
            Payment payment1 = new Payment();
            while (iterator.hasNext()) {
                payment1 = (Payment) iterator.next();
            }
            payment.setId(payment1.getId() + counter);
            paymentList.add(payment);
            cardUser.setId(payment.getCustomer());
            cardUser.setPaymentList(paymentList);
            if (repository.save(cardUser) != null) {
                status = true;
            }
        } else {
            payment.setId(counter);
            paymentList.add(payment);
            cardUser.setId(payment.getCustomer());
            cardUser.setPaymentList(paymentList);
            if (repository.insert(cardUser) != null) {
                status = true;
            }
        }
        return status;
    }

    @Override
    public List<Payment> getAllPaymentsByUserId(String userId) throws UserNotFoundException {
        List<Payment> allPayments = null;
        Optional<CardUser> optionalUser = repository.findById(userId);
        if(!optionalUser.isPresent()){
            throw new UserNotFoundException("User with the given id doesn't exist");
        }
        else{
            allPayments = repository.findById(userId).get().getPaymentList();
        }
        return allPayments;
    }

    @Override
    public List<Payment> getAllPaymentsByOutlet(String outletName) {
        List<Payment> allPayment = repository.findAllPaymentsByOutlet(outletName);
        return allPayment;
    }
}
