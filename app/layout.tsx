import { Metadata } from "next";
import { Roboto } from "next/font/google"; // Import Roboto as my main font
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";


// Configure Roboto font
const fontSans = Roboto({
  weight: ['300', '400', '500', '700'], //Specify the weights needed
  subsets: ["latin"],
  variable: "--font-sans", //CSS variable for the font
});

export const metadata: Metadata = {
  title: "My Practice Manager",
  description: "A practice manager application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.
        variable)}>
          {/* component imported from shadcn library */}
          <ThemeProvider
            attribute="class"
            // may add a component to switch between light and dark
            defaultTheme="dark"
            // enableSystem
            // disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        {/* {children} */}
      </body>
    </html>
  );
}