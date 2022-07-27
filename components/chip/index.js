import styles from "./index.module.css";

const Chip = ({ text, muted }) => {
    return (
        <button className={`${styles.chip} ${muted ? styles.chipMuted : ''}`} type="button">{text}</button>
    );
}

export default Chip;