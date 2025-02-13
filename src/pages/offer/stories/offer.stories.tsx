import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Offer } from "../../index";
import { ThemeContextProvider } from "@telefonica/mistica";
import { theme } from "../../../theme/theme";
import { BrowserRouter } from "react-router-dom"; 

const meta: Meta<typeof Offer> = {
  title: "Components/Offer",
  component: Offer,
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
    firstRowTitle: {
      control: 'text', 
      description: 'Título da primeira linha',
    },
    firstRowSubtitle: {
      control: 'text', 
      description: 'Subtítulo da primeira linha',
    },
    firstRowDescription: {
      control: 'text', 
      description: 'Descrição da primeira linha',
    },
    secondRowTitle: {
      control: 'text',
      description: 'Título da segunda linha',
    },
    secondRowSubtitle: {
      control: 'text',
      description: 'Subtítulo da segunda linha',
    },
    secondRowDescription: {
      control: 'text', 
      description: 'Descrição da segunda linha',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Offer>;

export const OfferStory: Story = {
  args: {
    isLoading: false, 
    firstRowTitle: 'First Row Title',
    firstRowSubtitle: 'First Row Subtitle',
    firstRowDescription: 'Description for the first row.',
    secondRowTitle: 'Second Row Title',
    secondRowSubtitle: 'Second Row Subtitle',
    secondRowDescription: 'Description for the second row.',
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