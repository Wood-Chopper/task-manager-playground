package com.woodchopper.tuto.onion.gateway;

import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TaskListList;

import java.util.List;
import java.util.Optional;

public interface PersistenceGateway {
    List<TaskListList> getLists();

    TaskListList saveList(TaskListList taskListListDto);

    Optional<TaskListList> getList(Long id);

    Item saveItem(Long id, Item item);

    Item getItem(Long listId, Long itemId);
}
