package com.data.orderfood.request;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AddCartItemRequest {

    private Long foodId;
    private int quantity;
    private List<String> ingredients;
}
