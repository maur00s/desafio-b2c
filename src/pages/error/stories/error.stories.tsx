import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Error } from "../../index";
import { ThemeContextProvider } from "@telefonica/mistica";
import { theme } from "../../../theme/theme";

const meta: Meta<typeof Error> = {
  title: "Components/Error",
  component: Error,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["credit", "service"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Error>;

export const CreditError: Story = {
  args: {
    variant: "credit",
  },
  decorators: [
    (Story) => (
      <ThemeContextProvider theme={theme}>
        <Story />
      </ThemeContextProvider>
    ),
  ],
};

export const ServiceError: Story = {
  args: {
    variant: "service",
  },
  decorators: [
    (Story) => (
      <ThemeContextProvider theme={theme}>
        <Story />
      </ThemeContextProvider>
    ),
  ],
};
