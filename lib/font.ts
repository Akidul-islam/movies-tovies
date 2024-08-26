import { Poppins, DM_Serif_Text } from "next/font/google";

const poppins_int = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSerifText_int = DM_Serif_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmtext",
  weight: ["400"],
});
const poppins = poppins_int.variable;
const dmtext = dmSerifText_int.variable;

export { poppins, dmtext };
