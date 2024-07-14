import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination";
import Card from "../Card";

const getData = async (page, cat) => {
    const res = await fetch(
        `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
        {
            cache: "no-store",
        },
    );
    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
};

const CardList = async ({ page, cat = null }) => {
    const { posts, count } = await getData(page, cat);
    const POST_PER_PAGE = 20;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Resent Post</h2>
            <div className={styles.posts}>
                {posts &&
                    posts?.map((item) => <Card key={item._id} post={item} />)}
            </div>
            <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
        </div>
    );
};

export default CardList;
