"use client";
import "./globals.css";
import { Layout, ConfigProvider, theme } from "antd";
import { useState } from "react";
import AppHeader from "../component/layout/AppHeader";
import AppSidebar from "../component/layout/AppSidebar";
import AppFooter from "../component/layout/AppFooter";
import AppBreadcrumb from "../component/layout/AppBreadcrumb";

const { Content } = Layout;

export const metadata = {
	title: "Playground",
	description: "comming soon",
};

export default function RootLayout({ children }) {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(true);
	const handleClick = () => {
		setIsDarkMode((previousValue) => !previousValue);
	};
	return (
		<html lang="en">
			<body>
				<ConfigProvider
					theme={{
						algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
					}}
				>
					<Layout
						style={{
							minHeight: "100vh",
						}}
					>
						<AppSidebar />
						<Layout className="site-layout">
							<AppHeader />
							<Content
								style={{
									margin: "0 16px",
								}}
							>
								<AppBreadcrumb />
								{children}
							</Content>
							<AppFooter />
						</Layout>
					</Layout>
				</ConfigProvider>
			</body>
		</html>
	);
}
