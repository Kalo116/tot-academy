import ContactForm from './contact-form/ContactForm.component';
import ContactMap from './contact-map/ContactMap.component';
import './Contacts.styles.css';

export default function ContactsPage() {


    return (
        <section id="contacts">
            <div className='contacts-info'>
                <h1 className='contacts-title'>Contacts</h1>
            </div>
            <div className='contact-container'>
                <ContactForm />
                <ContactMap />
            </div>
        </section>
    )
} 