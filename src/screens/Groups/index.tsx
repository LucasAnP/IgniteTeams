import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

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
      />
    </Container>
  );
}
