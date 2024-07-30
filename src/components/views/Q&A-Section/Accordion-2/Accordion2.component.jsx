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
                                <input type="checkbox" id={item.activeKey} className="accordion__input" />
                                <label htmlFor={item.activeKey} className="accordion__label">
                                    <div className="faq-number">
                                        <span>{item.number <= 9 ? `0${item.number}`: item.number}</span>
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
