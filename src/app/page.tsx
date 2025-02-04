'use client'
import Image from "next/image";
import NavBar from '@/app/components/navbar/navbar'
import Styles from './home.module.css'
import coffe_background from '@/app/resources/coffe_background.png'
import Card from "./components/card/card";
import Footer from "./contacto/page";

/* IMAGENES */
import robusta from "@/app/resources/robusta.jpeg"
import excelsa from "@/app/resources/excelsa.jpeg"
import arabica from "@/app/resources/arabica.jpg"
import liberica from "@/app/resources/liberica.jpeg"

export default function Home() {

  return (
    <div>
      <NavBar></NavBar>
      {/* Introduccion / Inicio */}
      <div className={Styles.home_introduction}>
        <Image className={Styles.mexico_flag_image} src={coffe_background} alt="mexico_flag_image"></Image>
        <div className={Styles.gradient_intro_background}>
          <label className={Styles.gradient_intro_text}></label>
          <label className={Styles.gradient_intro_text}>Cafe hecho para amantes del cafe.</label>
        </div>
      </div>

      {/* Cafes */}
      <div className={Styles.cofffes_container}>
        <Card image={robusta} description={"El mejor cafe para hacer tarea por las mañanas mientras escuchas musica."}></Card>
        <Card image={excelsa} description={"¿Eres un lector? este cafe es perfecto para ti."}></Card>
        <Card image={arabica} description={"Si eres un gran trabajador este cafe no puede hacer falta en tus mañanas."}></Card>
        <Card image={liberica} description={"Si tienes un impulso por no dejar de comprar cafe compra este."}></Card>
      </div>

    </div>
  );
}
