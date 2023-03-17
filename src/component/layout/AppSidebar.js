"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import {
	FileOutlined,
	PieChartOutlined,
	UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const { Sider } = Layout;
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../app/layout.slice";
function AppSidebar() {
	const dispatch = useDispatch();
	const { siderCollapsed: collapsed } = useSelector((state) => state.layout);
	console.log("collapsed", collapsed);
	const items = [
		getItem(<Link href={"/stack"}>Stack</Link>, "1", <PieChartOutlined />),
		getItem(<Link href={"/queue"}>Queue</Link>, "2", <PieChartOutlined />),
		getItem("Linked List", "3", null, [
			getItem(<Link href={"/linkedlist"}>Singly</Link>, "4"),
			getItem(<Link href={"/linkedlist"}>Doubly</Link>, "5"),
			getItem(<Link href={"/linkedlist"}>Circular</Link>, "6"),
			getItem(<Link href={"/linkedlist"}>Circular Doubly</Link>, "7"),
		]),
		getItem(<Link href={"/tree"}>Tree</Link>, "8", <PieChartOutlined />),
		getItem(<Link href={"/graph"}>Graph</Link>, "9", <PieChartOutlined />),
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
			onCollapse={(value) => dispatch(toggleSidebar())}
		>
			{/* <div className=" min-h-[30px] flex justify-center m-4 ">
				{!collapsed && <p className="text-white">Welcome User</p>}
			</div> */}

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
