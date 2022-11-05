package com.woodchopper.tuto.onion.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class ItemDto {
    private Long id;
    private String name;
    private String creationDate;
}
