import Link from 'next/link';
import Styles from './section.module.css'

interface MySectionProps{
    href:string,
    description:String;
    style?: React.CSSProperties;
}

export default function Section({href, description, style}: MySectionProps){
    return(
        <div className={Styles.section_container} style={style}>
            <Link href={href} className={Styles.section_text}>{description}</Link>
        </div>
    )
}