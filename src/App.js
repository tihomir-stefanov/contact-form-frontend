import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import ContactForm from "./components/contact-form/ContactForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

    return (
        <div className="container">
            <ToastContainer />
            <Header/>
            <div className="row">
                <div className="col-8 offset-2">
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default App;
