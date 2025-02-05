import { getVivoNewSkin, ThemeConfig } from "@telefonica/mistica";

import type { Locale, RegionCode, ColorScheme } from "@telefonica/mistica";
import '@telefonica/mistica/css/mistica.css';

const theme: ThemeConfig = {
  skin: getVivoNewSkin(),
  colorScheme: "light" as ColorScheme, 
  i18n: {
    locale: "pt-BR" as Locale, 
    phoneNumberFormattingRegionCode: "BR" as RegionCode,
  },
};

export { theme };
