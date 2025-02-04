import Image from "next/image";
import Styles from './navbar.module.css';
import Section from './section/section'

export default function NavBar() {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.section_container}>
        <Section href="/" description='Inicio'></Section>
        <Section href="/contacto" description='Contactos'></Section>
        <Section href="/informacion" description='Nosotros'></Section>
      </div>
    </nav>
  );
}
