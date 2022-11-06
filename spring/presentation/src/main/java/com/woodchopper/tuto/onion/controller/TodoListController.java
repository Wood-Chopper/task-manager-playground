package com.woodchopper.tuto.onion.controller;

import com.woodchopper.tuto.onion.dto.ItemDto;
import com.woodchopper.tuto.onion.dto.TodoListDto;
import com.woodchopper.tuto.onion.facade.TodoListFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("lists")
@RequiredArgsConstructor
public class TodoListController {

    private final TodoListFacade todoListFacade;

    @GetMapping
    public List<TodoListDto> getLists() {
        return todoListFacade.getLists();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TodoListDto addList(@RequestBody TodoListDto todoListDto) {
        return todoListFacade.addList(todoListDto);
    }

    @GetMapping("{id}")
    public TodoListDto getList(@PathVariable Long id) {
        return todoListFacade.getList(id);
    }

    @PostMapping("{id}/items")
    @ResponseStatus(HttpStatus.CREATED)
    public ItemDto addItem(@PathVariable Long id, @RequestBody ItemDto itemDto) {
        return todoListFacade.addItem(id, itemDto);
    }

    @GetMapping("{id}/sort")
    public List<ItemDto> sort(@PathVariable Long id) {
        return todoListFacade.sort(id);
    }
}
