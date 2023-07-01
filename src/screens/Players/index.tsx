import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
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
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/playerStorageDTO";

type RouteParams = {
  group: string;
};

export const Players = () => {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Team A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "New player",
        "Please enter the name of the new player"
      );
    }
    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("New player", error.message);
      } else {
        console.log(error);
        Alert.alert("New player", "Unable to add a new player.");
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Players", "Unable to load players of the selected team.");
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team, handleAddPlayer]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="Add the guys and separate the teams."
      />

      <Form>
        <Input
          onChangeText={setNewPlayerName}
          placeholder="Player name"
          autoCorrect={false}
        />
        <ButtonIcon name="add" onPress={handleAddPlayer} />
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
          <PlayerCard name={item.name} onRemove={() => {}} />
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
