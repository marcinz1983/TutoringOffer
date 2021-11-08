package com.anm.init.exception;

import com.anm.init.controller.request.ExceptionMethodArgumentNotValidResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class MethodArgumentNotValidExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionMethodArgumentNotValidResponse> handleMethodArgumentTypeMismatchException(MethodArgumentNotValidException exception) {
        ExceptionMethodArgumentNotValidResponse exceptionResponse = ExceptionMethodArgumentNotValidResponse.builder()
                .withCode(HttpStatus.BAD_REQUEST.value())
                .withMessage("Input argument is not valid , " + exception.getMessage())
                .withError(exception.getClass().getSimpleName()).build();
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}

