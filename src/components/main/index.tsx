import React, {SyntheticEvent, useState} from 'react';
import '../../App.css';
import styled from "styled-components";
import {Header} from '../header';
import {Link} from 'react-router-dom';

export default function Main() {
    const [values, setValues] = useState({room: "", name: ""});

    const handleChange = ({target: {value, name}}: { target: { value: string, name: string } }) => {
        setValues({...values, [name]: value})
    }
    const handleClick = (e: SyntheticEvent) => {
        const isDisabled = Object.values(values).some((v) => !v);
        if (isDisabled) e.preventDefault();
    }
    return (
        <div className="App">
            <Header/>
            <Container>
                Hi!Here I am learning Express, Socket.io to make live chat.
                <br/>
                <br/>
                <Form action="">
                    <div>
                        Join
                    </div>
                    <Input
                        required
                        type="text"
                        name="name"
                        placeholder={'Name'}
                        value={values.name}
                        onChange={handleChange}/>
                    <Input
                        required
                        type="text"
                        name="room"
                        placeholder={'Room'}
                        value={values.room}
                        onChange={handleChange}/>
                    <Link to={`/chat?name=${values.name}&room=${values.room}`} onClick={handleClick}>
                        <Button type={'submit'}>Sign in</Button>
                    </Link>
                </Form>
            </Container>
        </div>
    );
}

const Container = styled.div`
  padding: 80px 160px;
  font-size: 30px;
  font-weight: 700;
  color: rebeccapurple;
  text-transform: uppercase;

  a {
    color: orange;
    text-decoration: none;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rebeccapurple;
  row-gap: 16px;
  border-radius: 5px;
  padding: 160px 0;

  div {
    color: white;
  }
`;

const Input = styled.input`
  height: 46px;
  margin: 0 160px;
  width: 308px;
  box-sizing: border-box;
  padding: 4px;
  background: lightgrey;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  height: 46px;
  margin: 0 160px;
  width: 308px;
  background: blue;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  border-radius: 3px;

  :hover {
    opacity: 0.7;
  }
`;