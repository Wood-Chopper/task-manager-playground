package com.woodchopper.tuto.onion.adapter;

import com.woodchopper.tuto.onion.entity.ItemEntity;
import com.woodchopper.tuto.onion.entity.TaskListEntity;
import com.woodchopper.tuto.onion.exception.ItemNotFoundException;
import com.woodchopper.tuto.onion.exception.ListNotFoundException;
import com.woodchopper.tuto.onion.gateway.PersistenceGateway;
import com.woodchopper.tuto.onion.mapper.EntityMapper;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TaskListList;
import com.woodchopper.tuto.onion.repository.ItemRepository;
import com.woodchopper.tuto.onion.repository.TaskListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RelationalPersistenceAdapter implements PersistenceGateway {

    private final TaskListRepository taskListRepository;
    private final ItemRepository itemRepository;
    private final EntityMapper entityMapper = EntityMapper.INSTANCE;

    @Override
    public List<TaskListList> getLists() {
        List<TaskListEntity> lists = taskListRepository.findAll();
        return entityMapper.toModel(lists);
    }

    @Override
    public TaskListList saveList(TaskListList taskListList) {
        TaskListEntity taskListEntity = entityMapper.toEntity(taskListList);
        TaskListEntity savedTaskListEntity = taskListRepository.save(taskListEntity);
        return entityMapper.toModel(savedTaskListEntity);
    }

    @Override
    public Optional<TaskListList> getList(Long id) {
        Optional<TaskListEntity> optionalTaskListEntity = taskListRepository.findById(id);
        return optionalTaskListEntity.map(entityMapper::toModel);
    }

    @Override
    public Item saveItem(Long id, Item item) {
        ItemEntity itemEntity = entityMapper.toEntity(item);

        TaskListEntity taskListEntity = taskListRepository.findById(id).orElseThrow(ListNotFoundException::new);
        itemEntity.setTaskList(taskListEntity);

        ItemEntity savedItemEntity = itemRepository.save(itemEntity);

        return entityMapper.toModel(savedItemEntity);
    }

    @Override
    public Item getItem(Long listId, Long itemId) {
        ItemEntity itemEntity = itemRepository.findById(itemId).orElseThrow(ItemNotFoundException::new);
        return entityMapper.toModel(itemEntity);
    }
}
