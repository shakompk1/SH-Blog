import React from "react";
import styles from "./menuPost.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPost = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href={"/"} className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={"/p1.jpeg"}
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h4 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </h4>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.02.2024</span>
                    </div>
                </div>
            </Link>
            <Link href={"/"} className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={"/p1.jpeg"}
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>
                        Food
                    </span>
                    <h4 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </h4>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.02.2024</span>
                    </div>
                </div>
            </Link>
            <Link href={"/"} className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={"/p1.jpeg"}
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>
                        Fashion
                    </span>
                    <h4 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </h4>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.02.2024</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MenuPost;
