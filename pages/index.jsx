import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Index() {
	const initialRoute = useRouter();
	useEffect(() => {
		initialRoute.push("/datastructures/stack");
	}, []);
	return <div className="bg-slate-500 w-full"> Index hello world</div>;
}

export default Index;
