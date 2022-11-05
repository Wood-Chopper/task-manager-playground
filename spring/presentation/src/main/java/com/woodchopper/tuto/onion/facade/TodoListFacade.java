package com.woodchopper.tuto.onion.facade;

import com.woodchopper.tuto.onion.dto.ItemDto;
import com.woodchopper.tuto.onion.dto.TodoListDto;
import com.woodchopper.tuto.onion.mapper.DtoMapper;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TodoList;
import com.woodchopper.tuto.onion.service.TodoListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoListFacade {
    private final DtoMapper dtoMapper = DtoMapper.INSTANCE;
    private final TodoListService todoListService;

    public List<TodoListDto> getLists() {
        List<TodoList> todoLists = todoListService.getLists();
        return dtoMapper.toDto(todoLists);
    }

    public TodoListDto addList(TodoListDto todoListDto) {
        TodoList todoList = dtoMapper.toModel(todoListDto);
        TodoList savedTodoList = todoListService.addList(todoList);
        return dtoMapper.toDto(savedTodoList);
    }

    public TodoListDto getList(Long id) {
        TodoList todoList = todoListService.getList(id);
        return dtoMapper.toDto(todoList);
    }

    public ItemDto addItem(Long id, ItemDto itemDto) {
        Item item = dtoMapper.toModel(itemDto);
        Item savedItem = todoListService.addItem(id, item);
        return dtoMapper.toDto(savedItem);
    }
}
