import React, {useState} from "react";
import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";

interface IProps {
    message?: string;
    setMessage: (value: string) => void;
    params: any;
    socket: any;
}

export const SendForm = ({message, setMessage, params, socket}: IProps) => {
    const handleChange = ({target: {value}}: { target: { value: string } }) => setMessage(value);
    const [isOpen, setOpen] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!message) return;

        socket.emit("sendMessage", {message, params});
        setMessage("");
    };

    const onEmojiClick = ({emoji}: any) => setMessage(`${message} ${emoji}`);

    return (
        <Container onSubmit={handleSubmit}>
            <InputBlock>
                <Input
                    type="text"
                    name="message"
                    placeholder="What do you want to say?"
                    value={message}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                />
                <div>
                    <span onClick={() => setOpen(!isOpen)}>&#128512;</span>

                    {isOpen && (
                        <EmojiBlock>
                            <EmojiPicker onEmojiClick={onEmojiClick} />
                        </EmojiBlock>
                    )}
                </div>
            </InputBlock>
            <SendBlock>
                <ButtonSend type="submit" onSubmit={handleSubmit}>Send a message</ButtonSend>
            </SendBlock>
        </Container>
    );
};
const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: dimgray;
  padding: 24px;
  border-radius: 0 0 5px 5px;
`;
const InputBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;

`;
const SendBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    cursor: pointer;
  }
`;

const ButtonSend = styled.button`
  width: 300px;
  background: rebeccapurple;
  padding: 8px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;

`;

const Input = styled.input`
  width: 450px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  color: white;
`;
const EmojiBlock = styled.div`
  aside {
    position: absolute;
    bottom: 110px;
  }
`;
