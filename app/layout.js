import "./globals.css";

export const metadata = {
  title: "Sai Charan Hasnabad | MuleSoft Integration Developer",
  description:
    "Personal portfolio of Sai Charan Hasnabad — MuleSoft Integration Developer with 3.5+ years of experience building enterprise APIs and integrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
