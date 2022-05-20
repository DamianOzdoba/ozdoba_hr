import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Header from './js/components/Header';
import Home from './js/components/Home';
import About from './js/components/About';
import Employees from './js/components/Employees';
import Employers from "./js/components/Employers";
import Contact from "./js/components/Contact";
import Footer from './js/components/Footer';


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
        typography: {
            fontFamily: [
                "Montserrat",
                "sans-serif"
            ].join(","),
            fontWeight: 'bold',
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/employees" element={<Employees />}/>
                    <Route path="/employers" element={<Employers />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;