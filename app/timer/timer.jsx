import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from 'ui-helpers';
import { Spinner } from './spinner';

export const Timer = () => {
    const isWindowBig = useMediaQuery('(min-width: 1200px)');

    return (
        <Typography
            component="div"
            variant="body1"
            style={{
                top: isWindowBig ? 10 : 200,
                left: 10,
                height: 100,
                width: 100,
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Spinner />
        </Typography>
    );
};
