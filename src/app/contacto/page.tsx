import Image from "next/image";
import Styles from './contacto.module.css';
import NavBar from "../components/navbar/navbar";

export default function Contacto() {
  return (
    <div>
        <NavBar></NavBar>
        <div className={Styles.body}>
            <div className={Styles.central_container}>
                <label className={Styles.contactanos_tittle}>Contactanos, envianos tu mensaje</label>

                <div className={Styles.data_field}>
                    <label className={Styles.general_text}>Nombre</label>
                    <input className={Styles.data_input} type="text" />
                </div>
                <div className={Styles.data_field}>
                    <label className={Styles.general_text}>Mensaje</label>
                    <input className={Styles.data_input} type="text" />
                </div>
                <div className={Styles.data_field}>
                    <label className={Styles.general_text}>Comentarios</label>
                    <textarea className={Styles.textarea_input}/>
                </div>

            </div>
        </div>
    </div>
  );
}
