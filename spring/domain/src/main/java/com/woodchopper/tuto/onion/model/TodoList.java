package com.woodchopper.tuto.onion.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class TodoList {
    private Long id;
    private String name;
    private List<Item> items;
    private LocalDateTime creationDate;
}
