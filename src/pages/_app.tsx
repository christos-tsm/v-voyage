import "nprogress/nprogress.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import NProgress from "nprogress";

import { GlobalStyles } from "./theme/globalStyles";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		NProgress.configure({ showSpinner: false });
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		router.events.on("routeChangeStart", handleRouteStart);
		router.events.on("routeChangeComplete", handleRouteDone);
		router.events.on("routeChangeError", handleRouteDone);

		return () => {
			// Make sure to remove the event handler on unmount!
			router.events.off("routeChangeStart", handleRouteStart);
			router.events.off("routeChangeComplete", handleRouteDone);
			router.events.off("routeChangeError", handleRouteDone);
		};
	}, []);
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
