package com.woodchopper.tuto.onion.service;

import com.woodchopper.tuto.onion.model.Item;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.factory.Mappers;

@Mapper
public interface PatchItemService {
    PatchItemService INSTANCE = Mappers.getMapper(PatchItemService.class);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Item patchItem(@MappingTarget Item sourceItem, Item patchItem);
}
