import React, { useState,useRef } from 'react';


import { EyeTwoTone,EyeInvisibleOutlined  } from '@ant-design/icons';
import { Input, Space,Button,Row,List,Avatar } from 'antd';

import '../App.css'
import DataComponent from '../component/DataComponent';

const { TextArea } = Input;

function Home() {
    const [descriptionText,setDescriptionText] = useState(null);
    const [titleText,setTitleText] = useState(null);
    const [data,setData] = useState([
    ])

    const onAddClick = () => {
        setData(temp => [...temp,{title:titleText,description:descriptionText}]);
    }

    const deleteData = (e) => {
        setData([])
    }

  return (
    <div className='homeTextArea'>
        <h1>Home Page</h1>
            
                <Input 
                    placeholder="Enter Title" 
                    onChange={(e) => {setTitleText(e.target.value)}}
                    allowClear
                /><br/><br/>
                <TextArea 
                    placeholder="Enter Description" 
                    onChange={(e) => {setDescriptionText(e.target.value)}}
                    allowClear
                /><br/><br/>

                <Button type="primary" 
                    disabled={descriptionText && titleText ? false : true}
                    onClick={() => {onAddClick()}}
                >
                    ADD RECORD
                </Button>
                    
    
                <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
     <div style={{borderStyle:'solid',borderColor:'red',margin:'1%'}}>
         <List.Item
        value={"lmlm"}
      >
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
        />
      </List.Item>
     </div>
    )}
  />
   
   {
    <Button type="primary" 
    onClick={() => {deleteData()}}
    danger>
    DELETE RECORD
</Button>
   }
    </div>
  );
}

export default Home;
