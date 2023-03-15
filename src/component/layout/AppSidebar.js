import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
	FileOutlined,
	PieChartOutlined,
	UserOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

function AppSidebar() {
	const [collapsed, setCollapsed] = useState(false);
	return (
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
			<Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
		</Sider>
	);
}

export default AppSidebar;

const items = [
	getItem("Stack", "1", <PieChartOutlined />),
	getItem("Linked List", "2", null, [
		getItem("Singly", "3"),
		getItem("Doubly", "4"),
		getItem("Circular", "5"),
		getItem("Circular Doubly", "6"),
	]),
	// getItem("Heap", "sub1", <UserOutlined />),
];
function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
