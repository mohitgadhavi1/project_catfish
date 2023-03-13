import React from "react";
import Link from "next/link";
import { Layout, theme } from "antd";
const { Header } = Layout;

function AppHeader() {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Header
			style={{
				padding: 0,
				background: colorBgContainer,
			}}
		>
			<div className="flex justify-end">hello world</div>
		</Header>
	);
}

export default AppHeader;
