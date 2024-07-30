import Accordion2Component from './Accordion-2/Accordion2.component';
// import AccordionComponent from './Accordion/Accordion.component';
import './Questions.styles.css';

export default function QuestionsPage() {
    return (
        <section id="questions">
            <div className='questions-info'>
                <h1 className='questions-title'>FAQs</h1>
                <div className='questions-divider'></div>
            </div>
            <br />
            {/* <AccordionComponent /> */}
            <Accordion2Component />
        </section>
    )
}