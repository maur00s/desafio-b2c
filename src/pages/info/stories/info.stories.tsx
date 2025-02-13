import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Info } from "../../index";
import { ThemeContextProvider } from "@telefonica/mistica";
import { theme } from "../../../theme/theme";
import { BrowserRouter } from "react-router-dom"; 

const meta: Meta<typeof Info> = {
  title: "Components/Info",
  component: Info,
  tags: ["autodocs"],
  argTypes: {
    isLoading: {
      control: 'boolean', 
      description: 'Define se o estado de carregamento está ativado',
    }
  },
};

export default meta;

type Story = StoryObj<typeof Info>;

export const InfoStory: Story = {
  args: {
    isLoading: false, 
  },
  decorators: [
    (Story) => (
      <BrowserRouter> 
        <ThemeContextProvider theme={theme}>
          <Story />
        </ThemeContextProvider>
      </BrowserRouter>
    ),
  ],
};
