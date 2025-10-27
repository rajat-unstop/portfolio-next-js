import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white"
      >
        <div className="h-screen bg-slate-950 p-[30px]">
          <div className="bg-slate-900 h-full border border-slate-500 rounded-xl">
            <Navbar/>
            <div className="h-[90%]">
              {children}
            </div>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
