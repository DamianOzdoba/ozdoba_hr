import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Header from './Header';
import Home from './Home';
import About from './About';


function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#4b5171',
            },
            secondary: {
                main: '#e97373',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;