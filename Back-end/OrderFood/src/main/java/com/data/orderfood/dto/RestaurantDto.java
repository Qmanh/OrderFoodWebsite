package com.data.orderfood.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;
import org.hibernate.annotations.Collate;

import java.util.List;

@Data
@Embeddable
public class RestaurantDto {

    private Long id;
    private String title;

    @Column(length = 1000)
    private List<String> images;

    private String description;

}
