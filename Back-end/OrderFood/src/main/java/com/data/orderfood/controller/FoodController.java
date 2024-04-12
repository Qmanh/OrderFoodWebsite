package com.data.orderfood.controller;

import com.data.orderfood.model.Food;
import com.data.orderfood.model.Restaurant;
import com.data.orderfood.model.UserEntity;
import com.data.orderfood.request.CreateFoodRequest;
import com.data.orderfood.service.FoodService;
import com.data.orderfood.service.RestaurantService;
import com.data.orderfood.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {
    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name,
                                           @RequestHeader("Authorization") String jwt)throws Exception{
        UserEntity user = userService.findUserByJwtToken(jwt);

        List<Food> foods = foodService.searchFood(name);

        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>> getRestaurantFood(
            @RequestParam (required = false) boolean vagetarian,
            @RequestParam (required = false) boolean seasonal,
            @RequestParam (required = false) boolean nonveg,
            @RequestParam (required = false) String food_category,
            @PathVariable Long restaurantId,
            @RequestHeader("Authorization") String jwt)throws Exception{
        UserEntity user = userService.findUserByJwtToken(jwt);

        List<Food> foods = foodService.getRestaurantsFood(restaurantId,vagetarian,seasonal,nonveg,food_category);

        return new ResponseEntity<>(foods, HttpStatus.OK);
    }
}
