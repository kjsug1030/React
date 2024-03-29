import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  // console.log(todos);

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          text={todo.text}
          done={todo.done}
          key={todo.id}
          id={todo.id}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
