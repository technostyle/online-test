import React from 'react';
import 'css/reset.css';
import { Container } from '@material-ui/core';

import { Timer } from './timer';
import { TestBar } from './test-bar';
import { Navbar } from './navbar';
import { Question } from './question';
import { BottomNavbar } from './bottom-navbar';

export const App = () => (
    <>
        <Timer value={39} />
        <Container maxWidth="md">
            <TestBar />
            <Navbar />
        </Container>
        <Container maxWidth="sm">
            <Question />
        </Container>
        <Container maxWidth="sm">
            <BottomNavbar />
        </Container>
    </>
);
