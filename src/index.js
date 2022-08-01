import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled from "styled-components";


const Container = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(177, 231, 222, 0.6);
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Container>
        <App />
    </Container>
);