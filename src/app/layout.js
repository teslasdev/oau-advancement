import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NextTopLoader height={5} color="#2EB67D" speed={800}/>
        {children}
      </body>
    </html>
  );
}
