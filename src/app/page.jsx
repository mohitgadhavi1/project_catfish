"use client";
import Image from "next/image";
// import { Inter } from "next/font/google";
import { theme } from "antd";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<div
			style={{
				minHeight: 360,
				// background: colorBgContainer,
			}}
		>
			Home Page
		</div>
	);
}
