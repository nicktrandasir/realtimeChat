import React, {useEffect, useState} from "react";
import {Header} from "../header";
import styled from "styled-components";
import {io} from "socket.io-client";
import {useLocation} from "react-router-dom";
import {Messages} from "./components/messages";
import {SendForm} from "./components/send";
import {RoomInfo} from "./components/roomInfo";

const socket = io("ws://localhost:5000");

interface IProps {
}

export const Chat = (props: IProps) => {
    const {search} = useLocation();
    const [params, setParams] = useState<{ room: string, user: string } | any>({room: "", user: ""});
    const [state, setState] = useState<any>([]);
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState(0);

    useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(search));
        setParams(searchParams);
        socket.emit("join", searchParams);
    }, [search]);

    useEffect(() => {
        socket.on("message", ({data}) => {
            setState((_state: any) => [..._state, data]);
        });
    }, []);

    useEffect(() => {
        socket.on("room", ({data: {users}}) => {
            setUsers(users.length);
        });
    }, []);

    return (
        <div>
            <Header/>
            <Container>
               <RoomInfo params={params} users={users} socket={socket}/>
                <Messages messages={state} name={params.name}/>
                <SendForm message={message} setMessage={setMessage} params={params} socket={socket}/>
            </Container>
        </div>
    );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px;
`;

