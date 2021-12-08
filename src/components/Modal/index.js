import { useEffect, useCallback } from "react";
import CloseIcon from "../../assets/close.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import { keyCode } from "../../shared/constants";
import styles from "./styles.module.css";

export default function Modal({ data, item, onClose, setItem }) {
  const onRightClick = useCallback(() => {
    const _item = { ...item };
    const index = data.findIndex((e) => e.id === _item.id);
    let i = index;
    if (index !== -1 && index < data.length - 1) {
      i++;
      setItem(data[i]);
    } else {
      i = 0;
      setItem(data[i]);
    }
  }, [item, data, setItem]);

  const onLeftClick = useCallback(() => {
    const _item = { ...item };
    const index = data.findIndex((e) => e.id === _item.id);
    let i = index;
    if (index !== -1 && index > 0) {
      i--;
      setItem(data[i]);
    } else {
      i = data.length - 1;
      setItem(data[i]);
    }
  }, [item, data, setItem]);

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === keyCode.ESC) {
        onClose();
      }
      if (event.keyCode === keyCode.LEFT) {
        onLeftClick();
      }
      if (event.keyCode === keyCode.RIGHT) {
        onRightClick();
      }
    },
    [onLeftClick, onRightClick, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <>
      <div className={styles.overlay} onMouseDown={() => onClose(false)} />
      <div className={styles.modal}>
        <button onClick={() => onClose(false)} className={styles.close}>
          <img src={CloseIcon} alt="close" />
        </button>
        <div className={`${styles.arrowLeft} ${styles.arrows}`}>
          <button className={styles.arrowButton} onClick={() => onLeftClick()}>
            <img className={styles.arrow} src={ArrowLeft} alt="arrow-left" />
          </button>
        </div>
        <div className={`${styles.arrowRight} ${styles.arrows}`}>
          <button className={styles.arrowButton} onClick={() => onRightClick()}>
            <img className={styles.arrow} src={ArrowRight} alt="arrow-left" />
          </button>
        </div>
        <h3 className={styles.title}>{item?.title}</h3>
        <img
          className={styles.image}
          src={item?.image}
          alt={`img-${item.id}`}
        />
        <p className={styles.desc}>{item?.desc}</p>
      </div>
    </>
  );
}
