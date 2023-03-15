import React from "react";
import Link from "next/link";
import { Dropdown, Layout, theme } from "antd";
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
				background: "black",
				borderBottom: "0.1px solid #2C3333",
			}}
		>
			<div className="flex h-full flex-wrap justify-end">
				<div className=" w-[10%]  flex flex-wrap  items-center justify-around">
					{/* <Link href={"/"}>Home</Link> */}
					{/* <Link href={"/profile"}>
						<MdOutlineAccountCircle size={36} className="" />
					</Link> */}
					<Dropdown
						menu={{
							items: Items(),
						}}
					>
						<MdOutlineAccountCircle
							className={`cursor-pointer hover:text-[${colorBgContainer}]`}
							size={36}
						/>
					</Dropdown>
				</div>
			</div>
		</Header>
	);
}

//================static===================================
function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
function Items() {
	const items = [
		getItem(<Link href={"/my_profile"}>My profile</Link>, 1),
		getItem("Light Mode", 2),
		getItem("Sign Out", 3),
	];
	return items;
}

export default AppHeader;
