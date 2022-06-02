import React from 'react';
import { Col, Divider, Row } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Table, Tag } from 'antd';
import { deleteItems } from '../slices/todoSlice';

const TodoShow = () => {
  const columns = [
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDelete(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];
  const data = useSelector((state) => state.todoSlice.items);
  const dispatch = useDispatch();
  //console.log(data);

  const handleDelete = (stid) => {
    dispatch(deleteItems(stid));
  };
  return (
    <>
      <Row style={{ marginTop: '100px' }}>
        <Col flex={2}>
          <Table columns={columns} dataSource={data} rowKey="Id" />
        </Col>
      </Row>
    </>
  );
};

export default TodoShow;
