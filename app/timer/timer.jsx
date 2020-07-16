import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Spinner } from './spinner';

export const Timer = () => (
    <Typography
        component="div"
        variant="body1"
        style={{
            top: 10,
            left: 10,
            height: 100,
            width: 100,
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
        }}
    >
        <Spinner />
    </Typography>
);
