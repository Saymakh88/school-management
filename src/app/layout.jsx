import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 p-4 text-white flex gap-4 ">
          <Link href="/AddSchool">Add School</Link>
          <Link href="/ShowSchools">Show Schools</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
