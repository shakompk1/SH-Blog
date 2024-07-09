import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, lama dev here</b> Discover my stories and creative idea
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src={"/p1.jpeg"}
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </h3>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae nam odio saepe dolore, corrupti sequi debitis
                        facilis eligendi! Blanditiis quibusdam temporibus modi a
                        obcaecati laboriosam nobis illo aliquid earum
                        doloremque!
                    </p>
                    <button className={styles.button}>Read more </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
