package com.woodchopper.tuto.onion.dto;

import com.woodchopper.tuto.onion.model.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
public class TodoListDto {
    private Long id;
    private String name;
    private List<Item> items;
    private String creationDate;
}