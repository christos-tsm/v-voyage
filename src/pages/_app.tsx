import type { AppProps } from "next/app";
import { GlobalStyles } from "./theme/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
