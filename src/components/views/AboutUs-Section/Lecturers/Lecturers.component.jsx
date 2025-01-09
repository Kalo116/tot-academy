import './Lecturers.styles.css';
import lecturers from './lecturers.js';

export default function LecturersComponent() {
    return (
        <>
            {lecturers.map((el, index) => (
                <article key={`lecturer-${index}`} className={`card-container card${index + 1}`}>
                    <div className="image-container">
                        <img src={el.img} alt={el.name} />
                    </div>
                    <div className="overlay">
                        <h2 className="overlay__name">{el.name}</h2>
                        <p className="overlay__desc">{el.desc}</p>
                    </div>
                </article>
            ))}
        </>
    )
}