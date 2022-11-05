package com.woodchopper.tuto.onion.repository;

import com.woodchopper.tuto.onion.entity.TodoListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoListRepository extends JpaRepository<TodoListEntity, Long> {
}
