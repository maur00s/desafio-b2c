import React from "react";
import {
  InfoFeedbackScreen as MisticaInfoFeedbackScreen,
  ButtonPrimary,
  ButtonLink,
} from "@telefonica/mistica";

interface FeedbackScreenProps {
  title: string;
  description: string;
  textButton: string;
  textButtonLink: boolean | any;
  onButtonPress?: () => void;
}

export const FeedbackScreen: React.FC<FeedbackScreenProps> = ({
  title,
  textButton,
  description,
  onButtonPress,
  textButtonLink,
}) => {
  return (
    <MisticaInfoFeedbackScreen
      title={title}
      link={<ButtonLink onPress={() => {}}>{textButtonLink}</ButtonLink>}
      description={description}
      primaryButton={
        <ButtonPrimary onPress={onButtonPress || (() => {})}>
          {textButton}
        </ButtonPrimary>
      }
    />
  );
};
