package com.woodchopper.tuto.onion.adapter;

import com.woodchopper.tuto.onion.entity.ItemEntity;
import com.woodchopper.tuto.onion.entity.TodoListEntity;
import com.woodchopper.tuto.onion.exception.ListNotFoundException;
import com.woodchopper.tuto.onion.gateway.PersistenceGateway;
import com.woodchopper.tuto.onion.mapper.EntityMapper;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TodoList;
import com.woodchopper.tuto.onion.repository.ItemRepository;
import com.woodchopper.tuto.onion.repository.TodoListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RelationalPersistenceAdapter implements PersistenceGateway {

    private final TodoListRepository todoListRepository;
    private final ItemRepository itemRepository;
    private final EntityMapper entityMapper = EntityMapper.INSTANCE;

    @Override
    public List<TodoList> getLists() {
        List<TodoListEntity> lists = todoListRepository.findAll();
        return entityMapper.toModel(lists);
    }

    @Override
    public TodoList saveList(TodoList todoList) {
        TodoListEntity todoListEntity = entityMapper.toEntity(todoList);
        TodoListEntity savedTodoListEntity = todoListRepository.save(todoListEntity);
        return entityMapper.toModel(savedTodoListEntity);
    }

    @Override
    public Optional<TodoList> getList(Long id) {
        Optional<TodoListEntity> optionalTodoListEntity = todoListRepository.findById(id);
        return optionalTodoListEntity.map(entityMapper::toModel);
    }

    @Override
    public Item addItem(Long id, Item item) {
        ItemEntity itemEntity = entityMapper.toEntity(item);

        TodoListEntity todoListEntity = todoListRepository.findById(id).orElseThrow(ListNotFoundException::new);
        itemEntity.setTodoListEntity(todoListEntity);

        ItemEntity savedItemEntity = itemRepository.save(itemEntity);
        return entityMapper.toModel(savedItemEntity);
    }
}
