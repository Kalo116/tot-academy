import './CommentCard.styles.css'

export default function CommentCard(prop) {
    return (
            <article className="comment-container">

                <div className="comment-content">
                    <h2 className="content-info">
                        {prop.comment}
                    </h2>
                    <div className="content-name">
                        <p>
                            {prop.name}
                        </p>
                    </div>
                </div>
            </article>
    )
}