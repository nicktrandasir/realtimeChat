import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

interface IProps {

}

export const Header = (props: IProps) => {
    return (
        <Container>
            <Link to={'/'}>Main</Link>
            <Link to={'/chat'}>Chat</Link>
        </Container>
    );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 24px;
  padding: 16px;
  background: rebeccapurple;
`;

const Link = styled(NavLink)`
  font-size: 30px;
  color: white;
text-decoration: none;
  &.active {
    color: red;
  }
`;
