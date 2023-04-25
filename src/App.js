import React, { useState } from 'react';

import { EyeTwoTone,EyeInvisibleOutlined  } from '@ant-design/icons';
import { Input, Space,Button } from 'antd';

import './App.css'

function App() {
  const [password,setPassword] = useState(null);
  const [username,setUsername] = useState(null);

  const submitCredentails = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        "username":username,
        "password":password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((data) => {
          console.log("kmkknk",data);
          // Handle data
       })
       .catch((err) => {
          console.log(err.message);
       });
  }

  const [credentails,setCredentials] = useState();
  return (
    <div className='textCenter'>
      <h1>Login</h1>
      <Space direction="vertical">
        <Input 
          placeholder="username" 
          onChange={(e) => {setUsername(e.target.value)}}
        />
        <Input.Password
          placeholder="password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onChange={(e) => {setPassword(e.target.value)}}
        />
      <Button type="primary" disabled={username && password ? false : true} onClick={submitCredentails}>
        Login
      </Button>
        <small className='errorMsg'>{credentails ? null : 'wrong password or username'}</small>
      </Space>
    </div>
  );
}

export default App;
