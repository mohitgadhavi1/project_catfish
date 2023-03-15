import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
	FileOutlined,
	PieChartOutlined,
	UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const { Sider } = Layout;

function AppSidebar() {
	const [collapsed, setCollapsed] = useState(false);
	{
		/* <Link href={"/"}>Home</Link> */
	}
	const items = [
		getItem(<Link href={"/stack"}>Stack</Link>, "1", <PieChartOutlined />),
		getItem("Linked List", "2", null, [
			getItem("Singly", "3"),
			getItem("Doubly", "4"),
			getItem("Circular", "5"),
			getItem("Circular Doubly", "6"),
		]),
		// getItem("Heap", "sub1", <UserOutlined />),
	];

	return (
		<Sider
			theme="light"
			style={{
				backgroundColor: "black",
				borderRight: "0.1px solid #2C3333",
			}}
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
		>
			<div className=" min-h-[30px] flex justify-center m-4 ">
				{!collapsed && <p className="text-white">Welcome User</p>}
			</div>

			<Menu
				// defaultSelectedKeys={["1"]}
				mode="inline"
				items={items}
			/>
		</Sider>
	);
}

export default AppSidebar;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
