import ContactForm from './contact-form/ContactForm.component';
import ContactMap from './contact-map/ContactMap.component';
import './Contacts.styles.css';

export default function ContactsPage() {


    return (
        <section id="contacts">
            <div className='contacts-info'>
                <h2 className='contacts-title'>Contacts</h2>
                <div className='contacts-divider'></div>
            </div>
            <div className='contact-container'>
                <ContactForm />
                <ContactMap />
            </div>
        </section>
    )
} 