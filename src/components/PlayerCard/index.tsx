import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export const PlayerCard = ({ name, onRemove }: Props) => {
  return (
    <Container>
      <Icon name="person" />

      <Name>{name}</Name>
      <ButtonIcon name="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
};
