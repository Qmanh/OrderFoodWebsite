package com.data.orderfood.service.Impl;

import com.data.orderfood.config.JwtProvider;
import com.data.orderfood.model.UserEntity;
import com.data.orderfood.repository.UserRepository;
import com.data.orderfood.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtProvider jwtprovider;

    @Override
    public UserEntity findUserByJwtToken(String jwt) throws Exception {
        String email = jwtprovider.getEmailFromJwtToken(jwt);
        UserEntity user = findUserByEmail(email);

        return user;
    }

    @Override
    public UserEntity findUserByEmail(String email) throws Exception {
        UserEntity user = userRepository.findByEmail(email);

        if(user==null){
            throw new Exception("user not found");

        }
        return user;
    }
}
