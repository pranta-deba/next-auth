import Navbar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/common/Footer";
import AuthProvider from "@/services/AuthProvider";

export const metadata = {
  title: "Learn Auth",
  description: "Learn Auth with Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`antialiased`} suppressHydrationWarning={true}>
          <header>
            <Navbar />
          </header>
          <main className="min-h-[calc(100vh-48px)]">{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </AuthProvider>
    </html>
  );
}
