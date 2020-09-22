package com.card.userauthentication.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {

    @Id
    private String id;
    private String DOB;
    private String aadharNo;
    private String panNo;
    private String houseNo;
    private String district;
    private String state;
    private String country;
    private String password;
    private String amount;

    public User() {
    }

    public User(String id, String DOB, String aadharNo, String panNo, String houseNo, String district, String state, String country, String password, String amount) {
        this.id = id;
        this.DOB = DOB;
        this.aadharNo = aadharNo;
        this.panNo = panNo;
        this.houseNo = houseNo;
        this.district = district;
        this.state = state;
        this.country = country;
        this.password = password;
        this.amount = amount;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDOB() {
        return DOB;
    }

    public void setDOB(String DOB) {
        this.DOB = DOB;
    }

    public String getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(String aadharNo) {
        this.aadharNo = aadharNo;
    }

    public String getPanNo() {
        return panNo;
    }

    public void setPanNo(String panNo) {
        this.panNo = panNo;
    }

    public String getHouseNo() {
        return houseNo;
    }

    public void setHouseNo(String houseNo) {
        this.houseNo = houseNo;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", DOB='" + DOB + '\'' +
                ", aadharNo='" + aadharNo + '\'' +
                ", panNo='" + panNo + '\'' +
                ", houseNo='" + houseNo + '\'' +
                ", district='" + district + '\'' +
                ", state='" + state + '\'' +
                ", country='" + country + '\'' +
                ", password='" + password + '\'' +
                ", amount='" + amount + '\'' +
                '}';
    }
}
