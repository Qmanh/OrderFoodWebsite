package com.data.orderfood.service;

import com.data.orderfood.dto.RestaurantDto;
import com.data.orderfood.model.Restaurant;
import com.data.orderfood.model.UserEntity;
import com.data.orderfood.request.CreateRestaurantRequest;

import java.util.List;

public interface RestaurantService {
    public Restaurant createRestaurant(CreateRestaurantRequest req, UserEntity user);

    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant)throws Exception;

    public void deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long id) throws Exception;

    public Restaurant getRestaurantByUserId(Long userId) throws Exception;

    public RestaurantDto addToFavorites(Long restaurantId, UserEntity user) throws Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;
}
