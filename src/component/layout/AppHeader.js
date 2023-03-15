import React from "react";
import Link from "next/link";
import { Layout, theme } from "antd";
import { MdOutlineAccountCircle } from "react-icons/md";
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
				<div className=" w-[10%] flex flex-wrap  items-center justify-around">
					<Link href={"/"}>Home</Link>
					<Link href={"/profile"}>
						<MdOutlineAccountCircle size={36} className="" />
					</Link>
				</div>
			</div>
		</Header>
	);
}

export default AppHeader;
