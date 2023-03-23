import React from "react";
import Link from "next/link";
import { Dropdown, Layout, Typography } from "antd";
import { MdOutlineAccountCircle } from "react-icons/md";
const { Header } = Layout;

function AppHeader() {
	return (
		<Header
			style={{
				background: "transparent",
				// borderBottom: "1px solid gray",
			}}
		>
			<div
				style={{
					display: "flex",
					height: "100%",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<Typography.Title level={3}>Data Structures</Typography.Title>
				</div>
				<div className=" w-[10%] mr-10  flex flex-wrap  items-center justify-around">
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
