import React from "react";

export default function Visual({ Children }) {
	return (
		<div className="h-full">
			<div className="w-[20%] flex flex-col  justify-end  h-full border-x-2 border-b-2  bg-slate-700">
				{Children}
				<div className="w-full flex justify-center border-t-2">Visuals</div>
				<div className="w-full flex justify-center border-t-2">Visuals</div>
			</div>
		</div>
	);
}
