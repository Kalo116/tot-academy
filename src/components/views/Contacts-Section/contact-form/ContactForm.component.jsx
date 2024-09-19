import { useState } from 'react';
import Swal from 'sweetalert2';
import './ContactForm.styles.css'

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const validateFields = (formValues) => {
        let errors = {};
        if (!formValues.name) errors.name = "Full Name is required";
        if (!formValues.email) errors.email = "Email Address is required";
        if (!formValues.phone) errors.phone = "Phone Number is required";
        if (!formValues.message) errors.message = "Your Message is required";
        return errors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const validationErrors = validateFields(formValues);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }

        const formData = new FormData(event.target);
        formData.append("access_key", "439bebee-d2ed-451b-89ae-2d6738089a70");
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
            setFormValues({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setErrors({});
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });

        if (errors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    return (
        <div className='contact-form-container'>
            <form onSubmit={onSubmit} className='contact-form'>
                <h2>Get in touch!</h2>
                <div className='input-box'>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        className={`field ${errors.name ? 'error' : ''}`}
                        name="name"
                        placeholder='Enter your name'
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <p className='error-message'>{errors.name}</p>}
                </div>

                <div className='input-box'>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        className={`field ${errors.email ? 'error' : ''}`}
                        name="email"
                        placeholder='Enter your email'
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p className='error-message'>{errors.email}</p>}
                </div>

                <div className='input-box'>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        className={`field ${errors.phone ? 'error' : ''}`}
                        name="phone"
                        placeholder='Enter your phone'
                        value={formValues.phone}
                        onChange={handleInputChange}
                    />
                    {errors.phone && <p className='error-message'>{errors.phone}</p>}
                </div>

                <div className='input-box'>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        className={`field mess ${errors.message ? 'error' : ''}`}
                        name="message"
                        placeholder='Enter your message'
                        value={formValues.message}
                        onChange={handleInputChange}
                    />
                    {errors.message && <p className='error-message'>{errors.message}</p>}
                </div>
                <button type='submit'>
                    {isLoading ? <span className="loader"></span> : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
