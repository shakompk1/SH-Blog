import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2024 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                </Link>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi expedita facere veritatis assumenda fugit, quibusdam
                    tenetur, nisi possimus similique libero officiis distinctio
                    saepe dolorum ipsa modi eaque amet? Corporis, dolorem.
                </p>
                <Link className={styles.link} href="/">
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default Card;
