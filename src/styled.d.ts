// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    black: string;
    white: string;
    grey1: string;
    blue: string;
    borderRadius: string;
    LightBlue: string;
    DarkBlue: string;
    Grey: string;
    mainCTA: string;
    devices: {
      break1: string;
    };
  }
}
