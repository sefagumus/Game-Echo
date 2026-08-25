// import { games } from "../components/games";
// import styles from "./home.module.css";
import { ArticleCardImage } from "../components/ArticleCardImage";
import classes from "../components/ArticleCardImage.module.css";

export default function HomePage() {
  return (
    <div>
      <div className={classes.title}>Games</div>
      {/* 
      {games.map((game) => (
        <div key={game.id}>
          <img className={styles.gameLogo} src={game.logo} alt={game.name} />
        </div>
      ))} */}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <ArticleCardImage />
      </div>
    </div>
  );
}
