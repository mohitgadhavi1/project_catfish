import "../styles/globals.css";
// import Layout from "../component/Layout";

import { Provider } from "react-redux";
import { store } from "../store";
import Layout from "../component/layout";
// import { Roboto } from "@next/font/google";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const roboto = Roboto({
// 	subsets: ["latin"],
// 	weight: ["300", "700"],
// });

export default function App({ Component, pageProps }) {
	//className={roboto.className}
	return (
		<Provider store={store}>
			{/* <main> */}
			<Layout>
				<Component {...pageProps} />
			</Layout>
			{/* </main> */}
		</Provider>
	);
}
