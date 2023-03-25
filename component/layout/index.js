import React from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { Card, Layout } from "antd";

function Index({ children }) {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<AppHeader />
			<Layout>
				<AppSidebar />

				<Layout.Content
					style={{
						paddingRight: 24,
						margin: 0,
						minHeight: 280,
						// background: colorBgContainer,
					}}
				>
					<Card
						headStyle={{
							padding: 0,
							margin: 0,
						}}
					>
						{children}
					</Card>
				</Layout.Content>
			</Layout>
		</Layout>
	);
}

export default Index;
