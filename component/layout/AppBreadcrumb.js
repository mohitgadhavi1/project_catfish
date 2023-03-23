import React from "react";
import { Breadcrumb } from "antd";

function AppBreadcrumb() {
	return (
		<Breadcrumb
			style={{
				margin: "16px 0",
			}}
			items={
				[
					// { title: "Home" },
					// {
					// 	title: <a href="">Application Center</a>,
					// },
					// {
					// 	title: <a href="">Application List</a>,
					// },
				]
			}
		></Breadcrumb>
	);
}

export default AppBreadcrumb;
