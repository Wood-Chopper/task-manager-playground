package com.woodchopper.tuto.onion.service;

import com.woodchopper.tuto.onion.exception.ListNotFoundException;
import com.woodchopper.tuto.onion.gateway.PersistenceGateway;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TaskListList;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskListService {

    private final PersistenceGateway persistenceGateway;
    private final PatchItemService patchItemService = PatchItemService.INSTANCE;

    public List<TaskListList> getLists() {
        return persistenceGateway.getLists();
    }

    public TaskListList addList(TaskListList taskListList) {
        taskListList.setCreationDate(LocalDateTime.now());
        return persistenceGateway.saveList(taskListList);
    }

    public TaskListList getList(Long id) {
        return persistenceGateway.getList(id).orElseThrow(ListNotFoundException::new);
    }

    public Item addItem(Long id, Item item) {
        item.setCreationDate(LocalDateTime.now());
        return persistenceGateway.saveItem(id, item);
    }

    public List<Item> sortByName(Long id) {
        TaskListList taskListList = persistenceGateway.getList(id).orElseThrow(ListNotFoundException::new);
        //Sort
        taskListList.getItems().sort(Comparator.comparing(Item::getName));
        //Set order
        long index = 0;
        for (Item item : taskListList.getItems()) {
            item.setOrder(index);
            index++;
        }
        //Save in persistence
        persistenceGateway.saveList(taskListList);

        return taskListList.getItems();
    }

    public Item patch(Long listId, Long itemId, Item itemPatch) {
        Item sourceItem = persistenceGateway.getItem(listId, itemId);
        Item patchedItem = patchItemService.patchItem(sourceItem, itemPatch);
        return persistenceGateway.saveItem(listId, patchedItem);
    }
}
