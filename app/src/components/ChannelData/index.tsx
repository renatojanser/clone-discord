import React, { useRef, useEffect } from 'react';

import { 
    Container, Messages, InputWrapper, Input, InputIcon
} from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        key={n}
                        author="Renato Janser"
                        date="09/08/2021"
                        content="hoje é o meu aniversário!"
                    />
                ))}

                <ChannelMessage 
                    author="Diego Fernandes"
                    date="09/08/2021"
                    content={
                        <>
                            <Mention>@Renato Janser</Mention>, me carrega no LOL e CS de novo por favor?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;