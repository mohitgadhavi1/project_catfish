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
			<div className="flex flex-wrap justify-end">
				<div className=" w-[10%] flex flex-wrap justify-around">
					<Link href={"/"}>Home</Link>
					<Link href={"/profile"}>Profile</Link>
				</div>
			</div>
		</Header>
	);
}

export default AppHeader;
