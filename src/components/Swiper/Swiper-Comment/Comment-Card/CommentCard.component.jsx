import './CommentCard.styles.css';

export default function CommentCard(prop) {
    return (
        <article className="comment-container">
            <div className="comment-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className="comment-content">
                <h2 className="content-info">
                    {prop.comment}
                </h2>
                <p className="content-name">
                    {prop.name}
                </p>
            </div>
        </article>
    )
}