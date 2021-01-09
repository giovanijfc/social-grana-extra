import styled from "styled-components";

export const Text = styled.label`
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => getFontWeight(fontWeight)};
`;

export const SIZE = {
  small: "small",
  extraSmall: "extraSmall",
  regular: "regular",
  extraRegular: "extraRegular",
  medium: "medium",
  extraMedium: "extraMedium",
  high: "high",
  extraHigh: "extraHigh",
};

export const FONT_WEIGHT = {
  light: "light",
  regular: "regular",
  medium: "medium",
  semiBold: "semiBold",
  bold: "bold",
};

export const getFontSize = (size) => {
  switch (size) {
    case SIZE["small"]:
      return "0.9em";
    case SIZE["extraSmall"]:
      return "0.6em";
    case SIZE["regular"]:
      return "1.1em";
    case SIZE["extraRegular"]:
      return "1.3em";
    case SIZE["medium"]:
      return "1.5em";
    case SIZE["extraMedium"]:
      return "1.8em";
    case SIZE["high"]:
      return "2.2em";
    case SIZE["extraHigh"]:
      return "2.4em";
    default:
      return "3.0em";
  }
};

export const getFontWeight = (fontWeight) => {
  switch (fontWeight) {
    case FONT_WEIGHT["light"]:
      return {
        "font-weight": 100,
        "font-family": "Sofia Light",
      };
    case FONT_WEIGHT["regular"]:
      return {
        "font-weight": 300,
        "font-family": "Sofia Regular",
      };
    case FONT_WEIGHT["medium"]:
      return {
        "font-weight": 500,
        "font-family": "Sofia Medium",
      };
    case FONT_WEIGHT["semiBold"]:
      return {
        "font-weight": 700,
        "font-family": "Sofia Semi Bold",
      };
    case FONT_WEIGHT["bold"]:
      return {
        "font-weight": 900,
        "font-family": "Sofia Bold",
      };
    default:
      return {
        "font-weight": 100,
        "font-family": "Sofia Light",
      };
  }
};
