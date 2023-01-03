import React from "react";
import {Header} from "../header";
import styled from "styled-components";

interface IProps {

}

export const Chat = (props: IProps) => {
    return (
        <div>
            <Header/>
            <Container>
               Chat!
            </Container>
        </div>
    );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
`;