import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Product } from "../../index";
import { ThemeContextProvider } from "@telefonica/mistica";
import { theme } from "../../../theme/theme";
import { BrowserRouter } from "react-router-dom"; 

const meta: Meta<typeof Product> = {
  title: "Components/Product",
  component: Product,
  tags: ["autodocs"],
  argTypes: {
    isLoading: {
      control: 'boolean', 
      description: 'Define se o estado de carregamento está ativado',
    },
    handlePress: {
      action: 'handlePress',
      description: 'Simula o evento de pressionar uma linha (row)',
    },
    handleNextPage: {
      action: 'handleNextPage', 
      description: 'Simula o evento de ir para a próxima página',
    },
    preTurboTitle: {
      control: 'text', 
      description: 'Título da linha preTurbo',
    },
    preTurboDescription: {
      control: 'text', 
      description: 'Descrição da linha preTurbo',
    },
    preDiarioTitle: {
      control: 'text', 
      description: 'Título da linha preDiario',
    },
    preDiarioDescription: {
      control: 'text', 
      description: 'Descrição da linha preDiario',
    },
    preTurboSecondTitle: {
      control: 'text',
      description: 'Título da linha preTurboSecond',
    },
    preTurboSecondDescription: {
      control: 'text', 
      description: 'Descrição da linha preTurboSecond',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Product>;

export const ProductStory: Story = {
  args: {
    isLoading: false, 
    preTurboTitle: 'Pre Turbo Title',
    preTurboDescription: 'Description for preTurbo.',
    preDiarioTitle: 'Pre Diario Title',
    preDiarioDescription: 'Description for preDiario.',
    preTurboSecondTitle: 'Pre Turbo Second Title',
    preTurboSecondDescription: 'Description for preTurboSecond.',
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