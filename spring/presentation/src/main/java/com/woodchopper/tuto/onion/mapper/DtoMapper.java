package com.woodchopper.tuto.onion.mapper;

import com.woodchopper.tuto.onion.dto.ItemDto;
import com.woodchopper.tuto.onion.dto.TaskListDto;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TaskListList;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface DtoMapper {

    DtoMapper INSTANCE = Mappers.getMapper(DtoMapper.class);

    TaskListList taskListToModel(TaskListDto taskListDto);

    TaskListDto taskListToDto(TaskListList taskListList);

    List<TaskListDto> taskListToDto(List<TaskListList> taskListLists);

    Item itemToModel(ItemDto itemDto);

    ItemDto itemToDto(Item item);

    List<ItemDto> itemToDto(List<Item> items);
}
