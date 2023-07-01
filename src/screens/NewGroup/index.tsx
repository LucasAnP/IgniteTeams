import { useState } from "react";
import { Alert } from "react-native";
import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

export const NewGroup = () => {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  const handleNewGroup = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("New Team", "Inform team name.");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("New Team", error.message);
      } else {
        Alert.alert("New Team", "Unable to create a new team.");
        console.warn(error);
      }
    }
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="New team" subtitle="Create a team to add people" />
        <Input placeholder="Team name" onChangeText={setGroup} />
        <Button
          title="Create"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
};
