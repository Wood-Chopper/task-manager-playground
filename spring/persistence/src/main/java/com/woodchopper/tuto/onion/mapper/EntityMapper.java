package com.woodchopper.tuto.onion.mapper;

import com.woodchopper.tuto.onion.entity.ItemEntity;
import com.woodchopper.tuto.onion.entity.TaskListEntity;
import com.woodchopper.tuto.onion.model.Item;
import com.woodchopper.tuto.onion.model.TaskListList;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface EntityMapper {
    EntityMapper INSTANCE = Mappers.getMapper(EntityMapper.class);

    TaskListEntity toEntity(TaskListList taskListList);

    TaskListList toModel(TaskListEntity taskListEntity);

    List<TaskListList> toModel(List<TaskListEntity> taskListEntities);

    ItemEntity toEntity(Item item);

    Item toModel(ItemEntity itemEntity);
}
