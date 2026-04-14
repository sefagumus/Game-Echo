import { Container, Stack, Title, Text, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router";

export default function HomePage() {
  const nav = useNavigate();

  return (
    <Container>
      <Stack>
        <Title>Game Echo</Title>

        <Text>
          A social platform where gamers can share information about their
          games.
        </Text>

        <Group>
          <Button onClick={() => nav("/games")}>Explore the Games</Button>
        </Group>
      </Stack>
    </Container>
  );
}
