import type React from "react";

export type ColorType =
  | "blue"
  | "red"
  | "green"
  | "yellow"
  | "orange"
  | "purple"
  | "pink"
  | "gray"
  | "indigo"
  | "teal"
  | "cyan";

export interface StyledButtonProps {
  idLink?: string;
  localLink?: string;
  externalLink?: string;
  download?: boolean;
  color?: ColorType;
  fontSize?: "small" | "normal" | "big" | "large";
  barHeight?: string;
  background?: "transparent" | "glass" | "solid" | "invert";
  iconButton?: boolean;
  icon?: string;
  staticIcon?: string;
  active?: boolean;
  customClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}
