import localFont from "next/font/local";

export const gopher = localFont({
  src: [
    {
      path: "../fonts/GopherText-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/GopherText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gopher-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Gopher-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-gopher",
  display: "swap",
});
