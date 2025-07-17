import "./globals.css";
import { Inter } from "next/font/google";
import ClickSpark from "@/components/customs/react-bits/ClickSpark";
import ReduxProvider from "@/redux/redux-provider";
import { Toaster } from "sonner";

const inter = Inter({
	subsets: ["latin", "vietnamese"],
})

export const metadata = {
	title: {
		default: "MinimalNest",
		template: "%s - MinimalNest"
	},
	description: "Mua sắm nội thất chất lượng, hiện đại, tối giản tại MinimalNest!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} text-[16px] text-darkBold overflow-x-hidden antialiased`}
			>
				<Toaster />
				<ClickSpark
					sparkColor='#F3BC4F'
					sparkSize={12}
					sparkRadius={15}
					sparkCount={8}
					duration={400}
				>
					<ReduxProvider>
						{children}
					</ReduxProvider>
				</ClickSpark>
			</body>
		</html>
	);
}