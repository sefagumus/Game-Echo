import { Button, Paper, Text, Title } from "@mantine/core";
import classes from "./ArticleCardImage.module.css";
import FC26_Image from "../images/Fc26.jpg";
import GTAV_Image from "../images/GTA_V.jpg";
import MineCraft_Image from "../images/MineCraft.jpg";

interface ArticleCardImageData {
  id: number;
  name: string;
  logo: string;
}

export const data: ArticleCardImageData[] = [
  {
    id: 1,
    name: "EA Sports FC 26",
    logo: FC26_Image,
  },
  {
    id: 2,
    name: "GTA V",
    logo: GTAV_Image,
  },
  {
    id: 3,
    name: "Minecraft",
    logo: MineCraft_Image,
  },
];

export function ArticleCardImage() {
  return (
    <>
      {data.map((item) => (
        <Paper
          key={item.id}
          shadow="md"
          p="xl"
          radius="md"
          className={classes.card}
          style={{ backgroundImage: `url(${item.logo})` }}
        >
          <Button variant="white" color="dark" mt="auto">
            {item.name}
          </Button>
        </Paper>
      ))}
    </>
  );
}
