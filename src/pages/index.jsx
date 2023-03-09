import Image from "next/image";
import { Inter } from "next/font/google";
import {
	FileOutlined,
	PieChartOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout
			style={{
				minHeight: "100vh",
			}}
		>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<div
					style={{
						height: 32,
						margin: 16,
						background: "rgba(255, 255, 255, 0.2)",
					}}
				/>
				<Menu
					theme="dark"
					defaultSelectedKeys={["1"]}
					mode="inline"
					items={items}
				/>
			</Sider>
			<Layout className="site-layout">
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				/>
				<Content
					style={{
						margin: "0 16px",
					}}
				>
					<Breadcrumb
						style={{
							margin: "16px 0",
						}}
						items={[
							{ title: "Home" },
							{
								title: <a href="">Application Center</a>,
							},
							{
								title: <a href="">Application List</a>,
							},
						]}
					></Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
						}}
					>
						Bill is a cat.
					</div>
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
}

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
const items = [
	getItem("Option 1", "1", <PieChartOutlined />),
	getItem("Option 2", "2"),
	getItem("User", "sub1", <UserOutlined />, [
		getItem("Tom", "3"),
		getItem("Bill", "4"),
		getItem("Alex", "5"),
	]),
	getItem("Team", "sub2"),
	getItem("Files", "9", <FileOutlined />),
];
