package com.woodchopper.tuto.onion.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class TaskListList {
    private Long id;
    private String name;
    private List<Item> items;
    private LocalDateTime creationDate;
}
