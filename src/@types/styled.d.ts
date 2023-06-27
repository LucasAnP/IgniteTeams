/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import Color from "./colors";
import Size from "./sizes";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "src/theme/values";

declare module "styled-components/native" {
  export interface DefaultTheme {
    COLORS: typeof COLORS;
    FONT_SIZE: typeof FONT_SIZE;
    FONT_FAMILY: typeof FONT_FAMILY;
  }
}
