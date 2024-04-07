import { Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Template from "./template";
import { AppContext } from "./helper/Helpers";
import AppContextProvider from "./helper/ContextProvider";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const fonts = {
  rubik,
};
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecma-Screener",
  description: "Built by ECMA team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={fonts.rubik.variable}
        // className={inter.className}
      >
        <Providers>
          <Template>
            <AppContextProvider>{children}</AppContextProvider>
          </Template>
        </Providers>
      </body>
    </html>
  );
}
