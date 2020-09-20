package com.card.userauthentication.service;
import com.card.userauthentication.domain.User;
import com.card.userauthentication.exception.UserAlreadyExistsException;
import com.card.userauthentication.exception.UserNotFoundException;

public interface IUserAuthenticationService {

    public User findByIdAndPassword(String username, String password) throws UserNotFoundException;

    boolean saveUser(User user) throws UserAlreadyExistsException;
}
