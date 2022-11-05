package com.woodchopper.tuto.onion.mapper;

import com.woodchopper.tuto.onion.dto.ItemDto;
import com.woodchopper.tuto.onion.dto.TodoListDto;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TodoList;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface DtoMapper {

    DtoMapper INSTANCE = Mappers.getMapper(DtoMapper.class);

    TodoList toModel(TodoListDto todoListDto);
    TodoListDto toDto(TodoList todoList);
    List<TodoListDto> toDto(List<TodoList> todoLists);

    Item toModel(ItemDto itemDto);
    ItemDto toDto(Item item);
}
