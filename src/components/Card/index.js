import styles from "./styles.module.css";

export default function Card({ data, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={data.image} alt={`img-${data.id}}`} />
      <h4>{data.title}</h4>
    </div>
  );
}
