import styles from "./homepage.module.css";
import Featured from "@/components/Featured";
import CategoryList from "@/components/CategoryList";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function Home() {
    return (
        <div className={styles.container}>
            <Featured />
            <CategoryList />
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    );
}
