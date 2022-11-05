package com.woodchopper.tuto.onion.mapper;

import com.woodchopper.tuto.onion.entity.ItemEntity;
import com.woodchopper.tuto.onion.entity.TodoListEntity;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TodoList;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface EntityMapper {
    EntityMapper INSTANCE = Mappers.getMapper(EntityMapper.class);

    TodoListEntity toEntity(TodoList todoList);

    TodoList toModel(TodoListEntity todoListEntity);

    List<TodoList> toModel(List<TodoListEntity> todoListEntities);

    ItemEntity toEntity(Item item);

    Item toModel(ItemEntity itemEntity);
}
