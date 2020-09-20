package com.card.payment.domain;

public class Payment {

    private int id;
    private String customer;
    private String year;
    private String country;
    private String category;
    private String outlet;
    private String amount;

    public Payment() {
    }

    public Payment(int id, String customer, String year, String country, String category, String outlet, String amount) {
        this.id = id;
        this.customer = customer;
        this.year = year;
        this.country = country;
        this.category = category;
        this.outlet = outlet;
        this.amount = amount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getOutlet() {
        return outlet;
    }

    public void setOutlet(String outlet) {
        this.outlet = outlet;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "id=" + id +
                ", customer='" + customer + '\'' +
                ", year='" + year + '\'' +
                ", country='" + country + '\'' +
                ", category='" + category + '\'' +
                ", outlet='" + outlet + '\'' +
                ", amount='" + amount + '\'' +
                '}';
    }
}
