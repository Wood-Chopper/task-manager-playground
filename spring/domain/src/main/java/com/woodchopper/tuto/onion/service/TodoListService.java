package com.woodchopper.tuto.onion.service;

import com.woodchopper.tuto.onion.exception.ListNotFoundException;
import com.woodchopper.tuto.onion.gateway.PersistenceGateway;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TodoList;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoListService {

    private final PersistenceGateway persistenceGateway;

    public List<TodoList> getLists() {
        return persistenceGateway.getLists();
    }

    public TodoList addList(TodoList todoList) {
        todoList.setCreationDate(LocalDateTime.now());
        return persistenceGateway.saveList(todoList);
    }

    public TodoList getList(Long id) {
        return persistenceGateway.getList(id).orElseThrow(ListNotFoundException::new);
    }

    public Item addItem(Long id, Item item) {
        item.setCreationDate(LocalDateTime.now());
        return persistenceGateway.addItem(id, item);
    }

    public List<Item> sortByName(Long id) {
        TodoList todoList = persistenceGateway.getList(id).orElseThrow(ListNotFoundException::new);
        //Sort
        todoList.getItems().sort(Comparator.comparing(Item::getName));
        //Set order
        long index = 0;
        for (Item item : todoList.getItems()) {
            item.setOrder(index);
            index++;
        }
        //Save in persistence
        persistenceGateway.saveList(todoList);

        return todoList.getItems();
    }
}
