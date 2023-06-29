import { useState } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/core";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

type RouteParams = {
  group: string;
};

export const Players = () => {
  const [team, setTeam] = useState("Team A");
  const [players, setPlayers] = useState(["João", "Carlos"]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
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
        ListEmptyComponent={() => (
          <ListEmpty message="There aren't people in this team" />
        )}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remove Team" type="SECONDARY" />
    </Container>
  );
};
