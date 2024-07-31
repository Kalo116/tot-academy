import './Accordion2.styles.css';
import items from './question-2';

export default function Accordion2Component() {
    return (
        <div className="accordion">
            {
                items.map(item => {
                    return (
                        <>
                            <div className="accordion__item" key={item.activeKey}>
                                <input type="radio" id={item.activeKey} className="accordion__input" name="FAQ_accordion" />
                                <label htmlFor={item.activeKey} className="accordion__label">
                                    <div className="faq-number">
                                    </div>
                                    <div className='faq-question'>
                                        <span>{item.question}</span>
                                    </div>
                                </label>
                                <div className="accordion__content">
                                    <p>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
    );
}
