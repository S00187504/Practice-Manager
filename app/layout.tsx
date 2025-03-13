import { Metadata } from "next";
import { Roboto } from "next/font/google"; // Import Roboto as my main font
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

// Configure Roboto font
const fontSans = Roboto({
  weight: ['300', '400', '500', '700'], // Specify the weights needed
  subsets: ["latin"],
  variable: "--font-sans", // CSS variable for the font
});

export const metadata: Metadata = {
  title: "My Practice Manager",
  description: "A practice manager application",
  icons: {
    icon: "/favicon.ico", // Path to your custom favicon
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        <div className="flex justify-center items-center p-4 bg-dark-400"></div>
        {/* ThemeProvider */}
        <ThemeProvider
          attribute="class"
          enableSystem={false} // Disable system theme detection
          disableTransitionOnChange // Disable transitions to avoid flickering
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}