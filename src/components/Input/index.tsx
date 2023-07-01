import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";
import { TextInput } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export const Input = ({ inputRef, ...rest }: Props) => {
  const { COLORS } = useTheme();
  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
};
