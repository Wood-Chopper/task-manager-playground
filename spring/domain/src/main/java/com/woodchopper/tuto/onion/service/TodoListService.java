package com.woodchopper.tuto.onion.service;

import com.woodchopper.tuto.onion.exception.ListNotFoundException;
import com.woodchopper.tuto.onion.gateway.PersistenceGateway;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TodoList;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoListService {

    private final PersistenceGateway persistenceGateway;

    public List<TodoList> getLists() {
        return persistenceGateway.getLists();
    }

    public TodoList addList(TodoList todoList) {
        todoList.setCreationDate(LocalDateTime.now());
        return persistenceGateway.addList(todoList);
    }

    public TodoList getList(Long id) {
        return persistenceGateway.getList(id).orElseThrow(ListNotFoundException::new);
    }

    public Item addItem(Long id, Item item) {
        item.setCreationDate(LocalDateTime.now());
        return addItem(id, item);
    }
}
