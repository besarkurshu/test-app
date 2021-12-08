import Card from "../Card";
import styles from "./styles.module.css";

export default function Rows({ data, onRowClick }) {
  return (
    <div className={styles.row}>
      {data.map((item, index) => (
        <Card
          key={index}
          data={item}
          onClick={() => (onRowClick ? onRowClick(item) : null)}
        />
      ))}
    </div>
  );
}
