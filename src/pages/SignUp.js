import React, { useState } from 'react';

import { EyeTwoTone,EyeInvisibleOutlined  } from '@ant-design/icons';
import { Input, Space,Button } from 'antd';

import "../App.css"

function SignUp() {

  const [password,setPassword] = useState(null);
  const [username,setUsername] = useState(null);
  const [credentails,setCredentials] = useState(null);

  const submitCredentails = () => {
    fetch('https://kasper-backend.onrender.com/singin', {
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
          if(data.message === "loginsucess"){
            window.location.replace("https://kaspermockup.netlify.app/login");
          }
          setCredentials(data.message)
       })
       .catch((err) => {
          console.log(err.message);
       });
  }

  return (
    <div className='textCenter'>
      <h1>Sign up</h1>
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
        Sign Up
      </Button>
        <small className='errorMsg'>{credentails ? credentails : null}</small>
      </Space>
    </div>
  );
}

export default SignUp;
