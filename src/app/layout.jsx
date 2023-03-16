"use client";
import "./globals.css";
import { store } from "../../store";
import { Provider } from "react-redux";
import { ConfigProvider, Layout, theme } from "antd";
import { useSelector } from "react-redux";
import AppBreadcrumb from "@/component/layout/AppBreadcrumb";
import AppHeader from "@/component/layout/AppHeader";
import AppSidebar from "@/component/layout/AppSidebar";
import AppFooter from "@/component/layout/AppFooter";
const { Content } = Layout;

export default function RootLayout({ children }) {
	return (
		<Provider store={store}>
			<html lang="en">
				<body className="dark:text-white dark:bg-[#2C3333]">
					<ChildLayout>{children}</ChildLayout>
				</body>
			</html>
		</Provider>
	);
}

function ChildLayout({ children }) {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const { darkmode: isDarkMode } = useSelector((state) => state.layout);
	//.layout.darkmode
	console.log("isDarkMode", isDarkMode);
	// const {
	// 	token: { colorBgContainer },
	// } = theme.useToken();
	return (
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
				<AppHeader />
				<Layout className="site-layout">
					<AppSidebar />
					<Content
						style={{
							margin: "0 16px",
						}}
					>
						<AppBreadcrumb />
						{children}
					</Content>
					{/* <AppFooter /> */}
				</Layout>
			</Layout>
		</ConfigProvider>
	);
}
