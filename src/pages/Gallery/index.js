import { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../data.json";
import Rows from "../../components/Rows";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import history from "../../utils/history";
import styles from "./styles.module.css";

export default function Gallery() {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({ id: null, title: "", image: "" });

  const handleClickEvent = (item) => {
    history.replace(`/${item.id}`);
    setItem(item);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const onClose = (param) => {
    setOpen(param);
    history.replace("/");
    setItem({ id: null, title: "", image: "" });
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (params?.id) {
      const index = data.findIndex((e) => e.id === JSON.parse(params.id));
      if (index !== -1) {
        handleClickEvent(data[index]);
      }
    }
  }, [params.id]);

  return (
    <>
      <Header title={"Gallery"} />
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <hr />
        <Rows data={data} onRowClick={handleClickEvent} />
        {open && (
          <Modal
            onClose={onClose}
            item={item}
            setItem={handleClickEvent}
            data={data}
          />
        )}
      </div>
    </>
  );
}
