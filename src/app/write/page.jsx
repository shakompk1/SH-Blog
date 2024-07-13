"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./write.module.css";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const { status } = useSession();
    const router = useRouter();
    console.log(status);
    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }
    if (status === "unauthenticated") {
        router.push("/");
    }
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} />
            <div className={styles.editor}>
                <button
                    className={styles.button}
                    onClick={() => setOpen(!open)}
                >
                    <Image
                        src={"/plus.png"}
                        alt="plus"
                        width={16}
                        height={16}
                    />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image
                                src={"/image.png"}
                                alt="plus"
                                width={16}
                                height={16}
                            />
                        </button>
                        <button className={styles.addButton}>
                            <Image
                                src={"/external.png"}
                                alt="plus"
                                width={16}
                                height={16}
                            />
                        </button>
                        <button className={styles.addButton}>
                            <Image
                                src={"/video.png"}
                                alt="plus"
                                width={16}
                                height={16}
                            />
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell yout story... "
                />
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    );
};

export default WritePage;
