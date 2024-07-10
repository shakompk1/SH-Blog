import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination";
import Card from "../Card";

const CardList = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Resent Post</h2>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    );
};

export default CardList;
