package com.woodchopper.tuto.onion.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class Item {
    private Long id;
    private String name;
    private LocalDateTime creationDate;
}
