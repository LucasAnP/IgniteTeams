import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export const Players = () => {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Team name"
        subtitle="Add the guys and separate the teams."
      />

      <Form>
        <Input placeholder="Player name" autoCorrect={false} />
        <ButtonIcon name="add" />
      </Form>
    </Container>
  );
};
