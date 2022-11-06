package com.woodchopper.tuto.onion.gateway;

import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TodoList;

import java.util.List;
import java.util.Optional;

public interface PersistenceGateway {
    List<TodoList> getLists();

    TodoList saveList(TodoList todoListDto);

    Optional<TodoList> getList(Long id);

    Item addItem(Long id, Item item);
}
