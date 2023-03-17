import React from "react";
import Operations from "./operations";
import Visual from "./visual";

function Profile() {
	return (
		<>
			<div className="flex justify-center">
				<p className="text-2xl underline underline-offset-4">Stack</p>
			</div>
			<div className="flex mt-5 min-h-[50vh] ">
				<div className="flex items-end w-[30%] ">
					<Operations />
				</div>
				<div className="w-[50%]">
					<Visual />
				</div>
			</div>
		</>
	);
}

export default Profile;
