"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function Visual({ Children }) {
	const { data } = useSelector((state) => state.stack);

	return (
		<div className="flex justify-center h-full w-full ">
			<div className="w-[20%] flex flex-col  justify-end  h-full border-x-2 border-b-2  bg-slate-700">
				{data.map((item, i) => (
					<div key={i} className="w-full flex justify-center border-t-2">
						{item}
					</div>
				))}
			</div>
		</div>
	);
}
