import React from "react";
import { Button } from "antd";
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';
import './Todo.style.css';


const Todo = ({ todo, index, isDone, removeTodo }) => {
  const navigate = useNavigate();

  return (
    <>
    <div className="Todo">
      <Row justify="center" >
        <Col md={8}>
          <span style={{ textDecoration: todo.isDone ? "line-through" : "" }} onClick={() => { navigate(`/${todo.id}`, { state: { content: todo } }) }}>{todo.title}</span>
        </Col>

        <br />
        <Col md={4} offset={8}>
          <div className='Button-action'>
            <Button onClick={() => isDone(index)}>✓</Button>
            <Button onClick={() => removeTodo(index)}>✕</Button>
          </div>
        </Col>
      </Row>
    </div>
    <br />
    </>
  );
}

export default Todo;