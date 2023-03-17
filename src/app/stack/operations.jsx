"use client";
import { Button, Input, Select } from "antd";
import React, { useState } from "react";

export default function Selectoperation() {
	const [selectedValue, setSelectedValue] = useState(
		typesOfOperations[0] + "( )"
	);
	return (
		<div className="w-full">
			<div className="flex w-[80%]">
				<Input
					addonAfter={
						<Select
							value={selectedValue}
							onChange={(val) => setSelectedValue(val)}
							style={{ minWidth: 100 }}
						>
							{typesOfOperations.map((item, i) => (
								<p className="mb-2" key={i}>
									{item + "( )"}
								</p>
							))}
						</Select>
					}
				/>
				<Button className="ml-4">Submit</Button>
			</div>
		</div>
	);
}

const typesOfOperations = [
	"push",
	"pop",
	"isEmpty",
	"isFull",
	"peek",
	"count",
	"change",
	"display",
];
