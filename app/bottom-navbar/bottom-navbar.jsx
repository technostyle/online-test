import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CheckIcon from '@material-ui/icons/Check';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export const BottomNavbar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label="Pause"
                icon={<PauseIcon fontSize="large" />}
            />
            <BottomNavigationAction
                label="Finish"
                icon={<CheckIcon fontSize="large" />}
            />
        </BottomNavigation>
    );
};
