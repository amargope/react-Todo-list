import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
import { Input, Space } from 'antd';
const onSearch = (value) => console.log(value);
import { Button } from 'antd';

const Search () =>{
  return (
    <>
       
  <Space direction="vertical">
    
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    <Button type="primary">Search</Button>
    
  </Space>
         
    </>
  )
}

export default Search;