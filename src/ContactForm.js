import "./styles/index.css";
import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        
        fetch('./send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            setStatus(data);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        })
        .catch(error => console.log(error));
    };

    return ( 
        <div className="ContactForm" id="ContactForm">
            <form onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                {status && <p>{status}</p>}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
     );
}
 
export default ContactForm;