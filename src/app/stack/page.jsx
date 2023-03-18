import React from "react";
import Operations from "./operations";
import Visual from "./visual";

function Profile() {
	return (
		<>
			<div className="flex mt-5 ">
				<div className="flex flex-col items-center  w-[50%] border-r-2">
					<p className="text-2xl underline underline-offset-4 mb-2">Stack</p>
					<div className=" min-h-[40vh] w-full mb-4">
						<Visual />
					</div>
					<Operations />
				</div>
				<div className="flex flex-col items-center w-[50%]">
					<p className="text-2xl underline underline-offset-4 mb-2">Queue</p>
					<div className=" min-h-[40vh] w-full mb-4">
						<Visual />
					</div>
					<Operations />
				</div>
			</div>
		</>
	);
}

export default Profile;
