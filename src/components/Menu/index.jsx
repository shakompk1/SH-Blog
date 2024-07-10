import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../MenuPost";
import MenuCategory from "../MenuCategory";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.subTitle}>{"What's hot"}</h3>
            <h2 className={styles.title}>Most Popular</h2>
            <MenuPost />
            <h3 className={styles.subTitle}>{"Discover by topic"}</h3>
            <h2 className={styles.title}>Categories</h2>
            <MenuCategory />
            <h3 className={styles.subTitle}>{"Chosen by the editor"}</h3>
            <h2 className={styles.title}>Editors Pick</h2>
            <MenuPost withImage />
        </div>
    );
};

export default Menu;
