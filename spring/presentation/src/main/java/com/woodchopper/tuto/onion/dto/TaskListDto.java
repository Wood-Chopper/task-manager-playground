package com.woodchopper.tuto.onion.dto;

import com.woodchopper.tuto.onion.model.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class TaskListDto {
    private Long id;
    private String name;
    private List<Item> items;
    private String creationDate;
}
