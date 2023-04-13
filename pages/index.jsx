import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { routes } from "../routes";

function Index() {
	const initialRoute = useRouter();
	useEffect(() => {
		initialRoute.push(routes.dataStructure.stack);
	}, []);
	return <div className="bg-slate-500 w-full"> Index hello world</div>;
}

export default Index;
