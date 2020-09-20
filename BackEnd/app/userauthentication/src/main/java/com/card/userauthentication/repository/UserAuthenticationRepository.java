package com.card.userauthentication.repository;

import com.card.userauthentication.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserAuthenticationRepository extends MongoRepository<User, String> {

    User findByIdAndPassword(String id, String password);

}
