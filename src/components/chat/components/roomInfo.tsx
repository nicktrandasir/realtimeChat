import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

interface IProps {
    params: any;
    users: number;
    socket: any;
}

export const RoomInfo = ({users, params, socket}: IProps) => {
    const navigate = useNavigate();

    const leftRoom = () => {
        socket.emit("leftRoom", {params});
        navigate("/");
    };

    return (
        <Container>
            <div>Room № {params.room || "Unnamed room"}</div>
            <div>{users} users in this room</div>
            <ButtonExit onClick={leftRoom}>
                Exit
            </ButtonExit>
        </Container>
    );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: dimgray;
  padding: 24px;
  border-radius: 5px 5px 0 0;
`;

const ButtonExit = styled.button`
  width: 200px;
  background: rebeccapurple;
  padding: 8px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
`;
