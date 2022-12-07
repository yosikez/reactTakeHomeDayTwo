import React from "react";
import { useState } from "react";
import { Input, Button, Col, Row, Card } from "antd";
import { Outlet } from 'react-router-dom';
import Todo from "../component/ToDoDisplay/Todo";
import './assets/css/ToDoList.style.css'

const { TextArea } = Input;


const ToDoList = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [id, setId] = useState(1)
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'n',
            description: 'n',
            isDone: false
        }
    ]);

    const counterId = () => {
        setId((prevState) => prevState + 1);
    }

    const getTitle = (e) => {
        setTitle(e.target.value);
    }

    const getDescriptions = (e) => {
        setDescription(e.target.value);
    }

    const addTodo = (id, title, description) => {
        const newTodos = [...todos, { id: id, title: title, description: description, isDone: false }];
        setTodos(newTodos);
    }

    const Create = () => {
        setTitle("");
        setDescription("");
        counterId();
        addTodo(id, title, description);
    }

    const isDone = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };



    return (
        <>

            <Row justify="center" gutter={24}>
                <Col md={12}>
                    <Card
                        title="To Do List"
                        bordered={false}
                        headStyle={{ backgroundColor: '#FDAD54', color: 'black' }}
                        bodyStyle={{ padding: '30px' }}
                    >

                        <Col md={24} >
                            <Input placeholder="Add your title todo" onChange={getTitle} />
                        </Col>

                        <Col md={24} >
                            <TextArea placeholder="Descriptions" onChange={getDescriptions} />
                        </Col>

                        <Col md={24} >
                            <Button style={{ backgroundColor: '#FDAD54' }} block onClick={Create}>Add To Do List</Button>
                        </Col>

                    </Card>
                </Col>
                
                <Col md={12}>
                    <div className="site-card-border-less-wrapper">
                        <Card
                            title="To Do List"
                            bordered={false}
                            headStyle={{ backgroundColor: '#FDAD54', color: 'black' }}
                            bodyStyle={{ padding: '30px', height: '179px', overflowY: 'scroll', webkitScrollbar: 'none'}}
                        >
                            {
                                todos.length > 0 ? todos.map((todo, index) => (
                                    <Todo todo={todo} key={index} index={index} isDone={isDone} removeTodo={removeTodo} />
                                )).reverse() : "Tidak Ada Todo"
                            }
                        </Card>
                    </div>
                </Col>
            </Row>
          

            <br />

            <Row justify="center">
                <Col md={12}>
                    <Card
                        title="To Do List Detail"
                        bordered={false}
                        headStyle={{ backgroundColor: '#FDAD54', color: 'black' }}
                        bodyStyle={{ padding: '30px', height: '150px' }}
                    >
                        <Outlet />
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default ToDoList