import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "auth";
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Comments </h2>
            {status === "auth" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="write a commnet..."
                        className={styles.input}
                    />
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href={"/login"}>Login to write comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src={"/p1.jpeg"}
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}>01.01.2024 </span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eligendi consequatur, vero placeat, magnam
                        voluptatem necessitatibus tempore rerum magni odit
                        blanditiis dolore nihil accusantium alias saepe
                        consequuntur nisi molestiae voluptas ea.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src={"/p1.jpeg"}
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}>01.01.2024 </span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eligendi consequatur, vero placeat, magnam
                        voluptatem necessitatibus tempore rerum magni odit
                        blanditiis dolore nihil accusantium alias saepe
                        consequuntur nisi molestiae voluptas ea.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src={"/p1.jpeg"}
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}>01.01.2024 </span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eligendi consequatur, vero placeat, magnam
                        voluptatem necessitatibus tempore rerum magni odit
                        blanditiis dolore nihil accusantium alias saepe
                        consequuntur nisi molestiae voluptas ea.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            src={"/p1.jpeg"}
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}>01.01.2024 </span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eligendi consequatur, vero placeat, magnam
                        voluptatem necessitatibus tempore rerum magni odit
                        blanditiis dolore nihil accusantium alias saepe
                        consequuntur nisi molestiae voluptas ea.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
