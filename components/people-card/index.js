import GoArrow from "../go-arrow";
import styles from "./index.module.css";

const PeopleCard = ({ src, name, job, location, description, next = false }) => {
    return (
        <button className={styles.card} type="button">
            <div className={styles.imageContainer}>
                <img className={styles.image} src={src}/>
            </div>
            <div className={styles.container}>
                <span className={styles.name}>{name}</span>
                <span className={styles.job}>{job}</span>
                <span className={styles.location}>{location}</span>
                <p className={styles.description}>{description}</p>
                {next && <div style={{ marginTop: "auto" }}>
                    <GoArrow/>
                </div>}
            </div>
        </button>
    );
}

export default PeopleCard;