package com.woodchopper.tuto.onion.controller;

import com.woodchopper.tuto.onion.dto.ItemDto;
import com.woodchopper.tuto.onion.dto.TaskListDto;
import com.woodchopper.tuto.onion.facade.TaskListFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
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
public class TaskListController {

    private final TaskListFacade taskListFacade;

    @GetMapping
    public List<TaskListDto> getLists() {
        return taskListFacade.getLists();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TaskListDto addList(@RequestBody TaskListDto taskListDto) {
        return taskListFacade.addList(taskListDto);
    }

    @GetMapping("{id}")
    public TaskListDto getList(@PathVariable Long id) {
        return taskListFacade.getList(id);
    }

    @PostMapping("{id}/items")
    @ResponseStatus(HttpStatus.CREATED)
    public ItemDto addItem(@PathVariable Long id, @RequestBody ItemDto itemDto) {
        return taskListFacade.addItem(id, itemDto);
    }

    @GetMapping("{id}/sort")
    public List<ItemDto> sort(@PathVariable Long id) {
        return taskListFacade.sort(id);
    }

    @PatchMapping("{listId}/items/{itemId}")
    public ItemDto patch(@PathVariable Long listId, @PathVariable Long itemId, @RequestBody ItemDto itemPatchDto) {
        return taskListFacade.patch(listId, itemId, itemPatchDto);
    }
}
