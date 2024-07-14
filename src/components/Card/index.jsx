import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({ post }) => {
    console.log(post);
    return (
        <div className={styles.container}>
            {post.img && (
                <div className={styles.imageContainer}>
                    <Image
                        src={post.img}
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {post.createdAt.substring(0, 10)} -{" "}
                    </span>
                    <span className={styles.category}>{post.catSlug}</span>
                </div>
                <Link href={`/posts/${post.slug}`}>
                    <h3>{post.title}</h3>
                </Link>
                <p
                    className={styles.desc}
                    dangerouslySetInnerHTML={{
                        __html: post.desc.substring(0, 60),
                    }}
                ></p>
                <Link className={styles.link} href={`/posts/${post.slug}`}>
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default Card;
