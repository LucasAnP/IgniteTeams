import { useState } from "react";
import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export const NewGroup = () => {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  const handleNew = () => {
    navigation.navigate("players", { group });
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="New team" subtitle="Create a team to add people" />
        <Input placeholder="Team name" onChangeText={setGroup} />
        <Button title="Create" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
};
