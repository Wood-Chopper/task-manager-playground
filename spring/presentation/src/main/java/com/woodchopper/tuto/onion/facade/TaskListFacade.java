package com.woodchopper.tuto.onion.facade;

import com.woodchopper.tuto.onion.dto.ItemDto;
import com.woodchopper.tuto.onion.dto.TaskListDto;
import com.woodchopper.tuto.onion.mapper.DtoMapper;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TaskListList;
import com.woodchopper.tuto.onion.service.TaskListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskListFacade {
    private final DtoMapper dtoMapper = DtoMapper.INSTANCE;
    private final TaskListService taskListService;

    public List<TaskListDto> getLists() {
        List<TaskListList> taskListLists = taskListService.getLists();
        return dtoMapper.taskListToDto(taskListLists);
    }

    public TaskListDto addList(TaskListDto taskListDto) {
        TaskListList taskListList = dtoMapper.taskListToModel(taskListDto);
        TaskListList savedTaskListList = taskListService.addList(taskListList);
        return dtoMapper.taskListToDto(savedTaskListList);
    }

    public TaskListDto getList(Long id) {
        TaskListList taskListList = taskListService.getList(id);
        return dtoMapper.taskListToDto(taskListList);
    }

    public ItemDto addItem(Long id, ItemDto itemDto) {
        Item item = dtoMapper.itemToModel(itemDto);
        Item savedItem = taskListService.addItem(id, item);
        return dtoMapper.itemToDto(savedItem);
    }

    public List<ItemDto> sort(Long id) {
        List<Item> items = taskListService.sortByName(id);
        return dtoMapper.itemToDto(items);
    }

    public ItemDto patch(Long listId, Long itemId, ItemDto itemPatchDto) {
        Item itemPatch = dtoMapper.itemToModel(itemPatchDto);
        Item patchedItem = taskListService.patch(listId, itemId, itemPatch);
        return dtoMapper.itemToDto(patchedItem);
    }
}
