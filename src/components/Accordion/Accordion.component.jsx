import Accordion from 'react-bootstrap/Accordion';
import './Accordion.styles.css'
import items from './question';

export default function AccordionComponent() {
    return (
        <Accordion>
            {items.map((el) => {
                return (
                    <>
                        <Accordion.Item eventKey={el.activeKey} >
                            <Accordion.Header>🥇{el.question}</Accordion.Header>
                            <Accordion.Body>
                                {el.answer}
                            </Accordion.Body>
                        </Accordion.Item>
                    </>
                )
            })}
        </Accordion>
    );
}
