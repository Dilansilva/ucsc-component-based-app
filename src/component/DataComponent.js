import React, { useState } from 'react';

import { Card, Space,Avatar, List ,Button } from 'antd';

import '../App.css'

function DataComponent({details,deleteDetail}) {


  return (
    <List
    itemLayout="horizontal"
    dataSource={details}
    renderItem={(item, index) => (
      <List.Item
        actions={[<Button type="danger" 
        onClick={deleteDetail}
    >
        delete
    </Button>]}
      >
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
  );
}

export default DataComponent;
