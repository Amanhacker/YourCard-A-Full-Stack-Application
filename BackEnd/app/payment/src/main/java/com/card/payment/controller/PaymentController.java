package com.card.payment.controller;

import com.card.payment.domain.Payment;
import com.card.payment.exception.UserNotFoundException;
import com.card.payment.service.IPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PaymentController {

   IPaymentService paymentService;
   ResponseEntity responseEntity;

    @Autowired
    public PaymentController(IPaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/addPayment")
    public ResponseEntity<?> addNote(@RequestBody Payment payment) {
        if (paymentService.addPayment(payment)) {
            return new ResponseEntity<Payment>(payment, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<String>("Oops something went wrong !! try again", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/allPayments/{userId}")
    public ResponseEntity<?> getAllPaymentsByUserId(@PathVariable String userId) {
        try{
            List<Payment> userPayments = paymentService.getAllPaymentsByUserId(userId);
            responseEntity = new ResponseEntity<List<Payment>>(userPayments, HttpStatus.OK);
        }
        catch (UserNotFoundException e){
            responseEntity = new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return  responseEntity;
    }

    @GetMapping("/allPaymentsByOutlet/{outletName}")
    public ResponseEntity<?> getAllPaymentsByOutletName(@PathVariable String outletName) {
        List<Payment> userPaymentsByOutlet = paymentService.getAllPaymentsByOutlet(outletName);
        if (userPaymentsByOutlet != null) {
            return new ResponseEntity<List<Payment>>(userPaymentsByOutlet, HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("You don't have made any payments for the given outlet", HttpStatus.OK);
        }
    }



}
