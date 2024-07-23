import Swal from 'sweetalert2'
import './Contacts.styles.css';
import { useState } from 'react';

export default function ContactsPage() {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "7769688b-87ec-4650-9eff-14a63f53cfc4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Perfect!",
                text: "You successfully sent us an email. We will get back to you soon.",
                icon: "success"
            });
            event.target.reset();
            setIsLoading(false);
        }
    };

    return (
        <section id="contacts">
            <div className='contacts-info'>
                <h2 className='contacts-title'>Contacts</h2>
                <div className='contacts-divider'></div>
            </div>
            <div className='contact-container'>
                <div className='contact-form-container'>
                    <form onSubmit={onSubmit} className='contact-form'>
                        <h2>Contact Form</h2>
                        <div className='input-box'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" className='field' name="name" placeholder='Enter your name' />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className='field' name="email" placeholder='Enter your email' />
                        </div>

                        <div className='input-box'>
                            <label htmlFor="msg">Your Message</label>
                            <textarea type="text" className='field mess' name="message" placeholder='Enter your message' />
                        </div>
                        <button type='submit'>{isLoading ? <span className="loader"></span> : 'Send Message'}</button>
                    </form>
                </div>

                <div>

                </div>
            </div>
        </section>
    )
} 