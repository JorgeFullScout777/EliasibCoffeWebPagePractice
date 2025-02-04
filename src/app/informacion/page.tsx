'use client'
import Image from "next/image";
import NavBar from '@/app/components/navbar/navbar'
import Styles from './informacion.module.css'

export default function Informacion() {

  return (
    <div>
      <NavBar></NavBar>
      <div className={Styles.body}>
        <div className={Styles.central_container}>


            <div className={Styles.valores}>
                <label className={Styles.valores_text}>Valores</label>
                <ul>
                    <li className={Styles.valor}>Calidad: Nos esforzamos por ofrecer el mejor café, garantizando su sabor y frescura en cada taza.</li>
                    <li className={Styles.valor}>Sostenibilidad: Promovemos prácticas agrícolas y de negocio responsables, apoyando el bienestar ambiental y social.</li>
                    <li className={Styles.valor}>Innovación: Buscamos constantemente nuevas formas de mejorar nuestros procesos y la experiencia del cliente.</li>
                    <li className={Styles.valor}>Comunidad: Fomentamos relaciones solidarias con nuestros productores, colaboradores y clientes, creando un impacto positivo.</li>
                    <li className={Styles.valor}>Pasión: Amamos lo que hacemos, y esa pasión se refleja en la calidad de nuestro café y en la forma en que interactuamos con nuestro entorno.</li>
                </ul>

            </div>


            <div className={Styles.mision}>
                <label className={Styles.mision_vision_text}>Mision</label>

                <label className={Styles.mision_vision_descriptions}>Proporcionar a nuestros clientes cafés de origen único, frescos y de calidad superior, cultivados con métodos responsables y sostenibles. Nos comprometemos a ofrecer un producto que no solo satisface, sino que también fomenta el bienestar de nuestros agricultores y la preservación del medio ambiente.</label>


            </div>

            <div className={Styles.vision}>
                <label className={Styles.mision_vision_text}>Vision</label>

                <label className={Styles.mision_vision_descriptions}>Ser la empresa líder en la producción y distribución de café de alta calidad, ofreciendo experiencias excepcionales a nuestros clientes mientras promovemos prácticas sostenibles y el desarrollo de comunidades cafetaleras a nivel global.</label>

            </div>


        </div>
      </div>
    </div>
  );
}
