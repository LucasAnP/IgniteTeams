import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";

export const Players = () => {
  const [team, setTeam] = useState("Team A");
  const [players, setPlayers] = useState(["João", "Carlos"]);

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

      <HeaderList>
        <FlatList
          data={["Team A", "Team B"]}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
      />
    </Container>
  );
};
