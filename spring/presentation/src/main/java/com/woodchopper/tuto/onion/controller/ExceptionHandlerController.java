package com.woodchopper.tuto.onion.controller;

import com.woodchopper.tuto.onion.exception.ListNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandlerController {
    @ExceptionHandler
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public void todoListNotFound(ListNotFoundException exception) {
    }
}
