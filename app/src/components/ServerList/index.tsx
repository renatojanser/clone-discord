import React from "react";

import ServerButton from '../ServerButton';
import { Container, Separetor } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separetor />

            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={22} />
            <ServerButton />
        </Container>
    );
}

export default ServerList;