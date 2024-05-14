import Header from "@/Components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Header />
			<body>{children}</body>
		</html>
	);
}
