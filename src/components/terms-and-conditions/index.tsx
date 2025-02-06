import React from "react";
import {
  ResponsiveLayout,
  Box,
  TextLink,
  Text2,
  Text1,
  ButtonPrimary,
  FixedFooterLayout,
} from "@telefonica/mistica";

interface TermsAndConditionProps {
  text: string;
  textLink: string;
  linkUrl: string;
}

export const TermsAndCondition: React.FC<TermsAndConditionProps> = ({
  text,
  textLink,
  linkUrl,
}) => {
  return (
    <FixedFooterLayout
      footer={
        <div
          style={{
            boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fff",
            padding: "16px",
          }}
          data-testid="text-link"
        >
          <Box>
            <Text2 medium>
              {text}
              <TextLink to={linkUrl}>{textLink}</TextLink>
            </Text2>
          </Box>
          <ResponsiveLayout>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text1 medium>Total</Text1>
                <Text2 medium>R$ 25,99</Text2>
              </div>
              <ButtonPrimary onPress={() => console.log("Cliquei")}>
                Continuar
              </ButtonPrimary>
            </div>
          </ResponsiveLayout>
        </div>
      }
    >
      {""}
    </FixedFooterLayout>
  );
};
