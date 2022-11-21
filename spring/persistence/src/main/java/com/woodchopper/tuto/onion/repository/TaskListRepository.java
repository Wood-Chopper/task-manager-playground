package com.woodchopper.tuto.onion.repository;

import com.woodchopper.tuto.onion.entity.TaskListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskListRepository extends JpaRepository<TaskListEntity, Long> {
}
