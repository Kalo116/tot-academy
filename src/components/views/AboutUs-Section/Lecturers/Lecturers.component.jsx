import './Lecturers.styles.css';
import lecturers from './lecturers.js';

export default function LecturersComponent() {

    return (
        <>
            {lecturers.map((el) => {
                return (
                    <div key={el.i}>
                        <article className='card-container'>
                            <div className="image-container">
                                <img src={el.img} alt="" />
                            </div>
                            <div className="overlay">
                                <h1 className="overlay__name">{el.name}</h1>
                                <p className="overlay__desc">{el.desc}</p>
                            </div>
                        </article>
                    </div>
                )
            })}
        </>
    )
}