import Image, { StaticImageData } from "next/image";
import Styles from './card.module.css';

interface MySectionProps{
    image:StaticImageData,
    description:string;
    style?: React.CSSProperties;
}

export default function Card({image, description, style}: MySectionProps) {
  return (
      <div className={Styles.card}>
        <Image className={Styles.image} alt="queso" src={image}></Image>
        <label className={Styles.description}>{description}</label>
      </div>
  );
}
