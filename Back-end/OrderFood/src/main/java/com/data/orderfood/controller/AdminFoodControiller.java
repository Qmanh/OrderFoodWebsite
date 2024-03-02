package com.data.orderfood.controller;

import com.data.orderfood.model.Food;
import com.data.orderfood.model.Restaurant;
import com.data.orderfood.model.UserEntity;
import com.data.orderfood.request.CreateFoodRequest;
import com.data.orderfood.response.MessageResponse;
import com.data.orderfood.service.FoodService;
import com.data.orderfood.service.RestaurantService;
import com.data.orderfood.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodControiller {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req,
                                           @RequestHeader("Authorization") String jwt)throws Exception{
        UserEntity user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());
        Food food = foodService.createFood(req,req.getCategory(),restaurant);

        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@PathVariable Long id,
                                                      @RequestHeader("Authorization") String jwt)throws Exception{
        UserEntity user = userService.findUserByJwtToken(jwt);

        foodService.deleteFood(id);

        MessageResponse mess = new MessageResponse();
        mess.setMessage("food deleted successfully!");
        return new ResponseEntity<>(mess, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Food> updateFoodAvailabilityStatus(@PathVariable Long id,
                                           @RequestHeader("Authorization") String jwt)throws Exception{
        UserEntity user = userService.findUserByJwtToken(jwt);

        Food food = foodService.updateAvailabilityStatus(id);

        return new ResponseEntity<>(food, HttpStatus.OK);
    }

}
