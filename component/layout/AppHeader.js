import React, { useState } from "react";
import Link from "next/link";
import { Dropdown, Layout, Menu, Typography } from "antd";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";
const { Header } = Layout;

function AppHeader() {
	return (
		<Header
			style={{
				background: "transparent",
				height: "5em",
				borderBottom: "1px solid gray",
				marginBottom: "1em",
			}}
		>
			<div
				style={{
					display: "flex",
					height: "100%",
					justifyContent: "space-between",
				}}
			>
				<div className="w-full">
					<HeaderMenu />
				</div>
				<div className="flex flex-wrap  items-center">
					<Dropdown
						menu={{
							items: Items(),
						}}
					>
						<MdOutlineAccountCircle style={{ cursor: "pointer" }} size={36} />
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

function HeaderMenu() {
	const router = useRouter();
	const [current, setCurrent] = useState("datastructures");
	const onClick = (e) => {
		router.replace(e.key);
		setCurrent(e.key);
	};
	return (
		<Menu
			style={{
				background: "transparent",
				borderBottom: "none",
			}}
			onClick={onClick}
			selectedKeys={[current]}
			mode="horizontal"
			items={menuItems}
		/>
	);
}

const menuItems = [
	{
		label: "Data Structures",
		key: "data_structures",
		//   icon: <MailOutlined />,
	},
	{
		label: "Algorithms",
		key: "algorithms",
		//   icon: <AppstoreOutlined />,
		// disabled: true,
	},
];
