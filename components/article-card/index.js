import styles from "./index.module.css";

const ArticleCard = ({ src, subject, date, description }) => {
    return (
        <button className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={src}/>
            </div>

            <div className={styles.container}>
                <div className="flex">
                    <p className={styles.subject}>{subject}</p>
                    <p className={styles.date}>{date}</p>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </button>
    )
}

export default ArticleCard;