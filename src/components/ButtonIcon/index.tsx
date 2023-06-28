import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
type Props = TouchableOpacityProps & {
  name: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export const ButtonIcon = ({ name, type = "PRIMARY", ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon name={name} type={type} />
    </Container>
  );
};
