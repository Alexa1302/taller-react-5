import React from "react";
import styles from "./Styles/Card.module.css";

const Card = () => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Desarrollador de Software</h2>
            <p className={styles.description}>Profesional en desarrollo de software con experiencia en la creación, implementación y mantenimiento de aplicaciones y sistemas. 
            Competente en varios lenguajes de programación y tecnologías, con un enfoque en la entrega de soluciones eficientes y escalables.</p>
            <button className={styles.button}>Contactar</button>
        </div>
    );
}

export default Card;