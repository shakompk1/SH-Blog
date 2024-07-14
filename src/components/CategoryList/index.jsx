import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./categoryList.module.css";

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
};

const CategoryList = async () => {
    const data = await getData();
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Popular Category</h2>
            <div className={styles.categories}>
                {data.map((cat) => (
                    <Link
                        href={`/blog?cat=${cat.slug}`}
                        key={cat._id}
                        className={`${styles.category} ${styles.style}`}
                    >
                        {cat.img && (
                            <Image
                                src={cat.img}
                                alt="style"
                                width={32}
                                height={32}
                                className={styles.image}
                            />
                        )}
                        {cat.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
