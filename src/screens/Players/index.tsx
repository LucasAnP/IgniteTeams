import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";

export const Players = () => {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Team name"
        subtitle="Add the guys and separate the teams."
      />
    </Container>
  );
};
