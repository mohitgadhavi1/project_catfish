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
import { toggleSidebar } from "../../pages/layout.slice";
function AppSidebar() {
  const dispatch = useDispatch();
  const { siderCollapsed: collapsed } = useSelector((state) => state.layout);

  return (
    <Sider
      // theme="light"
      style={{
        background: "transparent",
        // borderRight: "1px solid gray",
        // border: "1px solid black",
      }}
      // collapsible
      collapsed={!collapsed}
      onCollapse={(value) => dispatch(toggleSidebar())}
    >
      {/* <div className=" min-h-[30px] flex justify-center m-4 ">
				{!collapsed && <p className="text-white">Welcome User</p>}
			</div> */}

      <Menu
        style={{ border: 0, background: "transparent" }}
        // defaultSelectedKeys={["1"]}
        mode="inline"
        items={Items()}
      />
    </Sider>
  );
}

export default AppSidebar;

function Items() {
  return [
    getItem(<Link href={"/stack"}>Stack</Link>, "1", <PieChartOutlined />),
    getItem(<Link href={"/queue"}>Queue</Link>, "2", <PieChartOutlined />),
    getItem(
      <Link href={"/linkedlist"}>Linked list</Link>,
      "3",
      <PieChartOutlined />
    ),
    getItem(<Link href={"/tree"}>Tree</Link>, "8", <PieChartOutlined />),
    getItem(<Link href={"/graph"}>Graph</Link>, "9", <PieChartOutlined />),
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
