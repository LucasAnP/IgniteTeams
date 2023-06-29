import { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("newGroup");
  };

  return (
    <Container>
      <Header />
      <Highlight title="Teams" subtitle="Play with your team." />
      <FlatList
        data={groups}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <GroupCard title="Galera do Ignite" />}
        contentContainerStyle={groups?.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="How about signing up the first class?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Create new team" onPress={handleNewGroup} />
    </Container>
  );
}
