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

    TodoList todoListToModel(TodoListDto todoListDto);

    TodoListDto todoListToDto(TodoList todoList);

    List<TodoListDto> todoListToDto(List<TodoList> todoLists);

    Item itemToModel(ItemDto itemDto);

    ItemDto itemToDto(Item item);

    List<ItemDto> itemToDto(List<Item> items);
}
