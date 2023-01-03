import React from 'react';
import '../../App.css';
import styled from "styled-components";
import { Header } from './../header/index';

export default function Main() {
    return (
        <div className="App">
            <Header/>
            <Container>
                Hi!Here I am learning Express, Socket.io to make live chat.
                <br/>
                Go to <a href="/chat">Chat!</a>
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


