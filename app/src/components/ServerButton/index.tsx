import React from 'react';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotification?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotification,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotification={hasNotification}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src="https://svgshare.com/i/Pb9.svg" alt="RocketSeat" />}
        </Button>
    );
}

export default ServerButton;