import React from "react";
import styled from "styled-components";

interface IProps {
    messages: any[];
    name: string
}

export const Messages = ({messages, name}: IProps) => {
    return (
        <Container>
            {messages.map(({user, message}, i) =>
                <MessageBlock key={i} direction={user.name === name}>
                    <Author>{user.name}</Author>
                    <Message>{message}</Message>
                </MessageBlock>
            )}
        </Container>
    );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: gray;
  padding: 24px;
  height: 500px;
  overflow: auto;
`;

const MessageBlock = styled.div<{ direction: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({direction}) => direction ? "end" : "start"};
  width: 100%;
  padding: 12px 0;
`;

const Author = styled.span`
  color: rebeccapurple;
  font-size: 18px;
  font-weight: 600;
`;

const Message = styled.span`
  color: black;
  font-weight: 700;
  font-size: 18px;
  padding: 4px 8px;
  border: 1px solid white;
  background: white;
  border-radius: 5px;
`;