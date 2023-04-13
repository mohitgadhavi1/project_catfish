"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Sider } = Layout;
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../pages/layout.slice";
import { routes } from "../../routes";

function AppSidebar() {
	const dispatch = useDispatch();
	const { siderCollapsed: collapsed } = useSelector((state) => state.layout);

	return (
		<Sider
			style={{
				background: "transparent",
			}}
			collapsed={!collapsed}
			onCollapse={(value) => dispatch(toggleSidebar())}
		>
			<Menu
				style={{ border: 0, background: "transparent" }}
				defaultSelectedKeys={["1"]}
				mode="inline"
				items={Items()}
			/>
		</Sider>
	);
}

export default AppSidebar;

function Items() {
	return [
		getItem(<Link href={routes.dataStructure.stack}>Stack</Link>, "1"),
		getItem(<Link href={routes.dataStructure.queue}>Queue</Link>, "2"),
		getItem(
			<Link href={routes.dataStructure.linked_list}>Linked list</Link>,
			"3"
		),
		getItem(<Link href={routes.dataStructure.tree}>Tree</Link>, "8"),
		getItem(<Link href={routes.dataStructure.graph}>Graph</Link>, "9"),
	];
}

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
