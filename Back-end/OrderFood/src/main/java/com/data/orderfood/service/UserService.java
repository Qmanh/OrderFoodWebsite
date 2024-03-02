package com.data.orderfood.service;

import com.data.orderfood.model.UserEntity;

public interface UserService {
    public UserEntity findUserByJwtToken(String jwt) throws Exception;

    public UserEntity findUserByEmail(String email) throws Exception;


}
