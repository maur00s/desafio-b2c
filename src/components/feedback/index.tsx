import React from "react";
import {
  InfoFeedbackScreen as MisticaInfoFeedbackScreen,
  Box,
  Text3,
  ButtonPrimary,
  ButtonLink,
  TextLink,
} from "@telefonica/mistica";

interface FeedbackScreenProps {
  title: string;
  description: string;
  textButton: string;
  linkUrl?: string;
  textLink?: string;
  textButtonLink: boolean | any;
  onButtonPress?: () => void;  
  onButtonPressLink?: () => void;  
}

export const FeedbackScreen: React.FC<FeedbackScreenProps> = ({
  title,
  linkUrl,
  textLink,
  textButton,
  description,
  onButtonPress,
  textButtonLink,
  onButtonPressLink
}) => {
  return (
    <MisticaInfoFeedbackScreen
      title={title}
      link={<ButtonLink onPress={onButtonPressLink || (() => {})}>{textButtonLink}</ButtonLink>}
      extra={
        <Box>
          <Text3 medium>
            {description}
            <TextLink to={linkUrl}>{textLink}</TextLink>
          </Text3>
        </Box>
      }
      primaryButton={
        <ButtonPrimary onPress={onButtonPress || (() => {})}>
          {textButton}
        </ButtonPrimary>
      }
    />
  );
};
