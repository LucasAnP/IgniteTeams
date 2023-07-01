import { useState, useCallback } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { Container } from "./styles";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { Loading } from "@components/Loading";

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("newGroup");
  };

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.warn(error);
      Alert.alert("Teams", "Unable to load teams.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate("players", { group });
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Teams" subtitle="Play with your team." />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups?.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="How about signing up the first class?" />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button title="Create new team" onPress={handleNewGroup} />
    </Container>
  );
}
