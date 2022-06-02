import React, { useState } from 'react';
import { addItems } from '../slices/todoSlice';
import { Col, Divider, Row } from 'antd';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import TodoShow from './TodoShow';
import uuid from 'react-uuid';

const Todo = () => {
  const [value, setValue] = useState({
    task: '',
    description: '',
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const clickHandler = () => {
    value.id = uuid();
    console.log(value);
    setValue({ task: '', description: '' });
    dispatch(addItems(value));
  };
  return (
    <>
      <Divider orientation="left">Todo Apps</Divider>
      <Row style={{ marginTop: '100px' }}>
        <Col flex={3}>
          <Input placeholder="Tasks" onChange={handleChange} name="task" />{' '}
          <br /> <br />
          <Input
            placeholder="Description"
            onChange={handleChange}
            name="description"
          />
          <br />
          <br />
          <Button
            type="primary"
            style={{ marginLeft: '300px' }}
            onClick={clickHandler}
          >
            Add to List
          </Button>
        </Col>
        <TodoShow />
      </Row>
    </>
  );
};

export default Todo;
