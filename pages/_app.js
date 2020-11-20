import Header from "components/Header";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import ContextWrapper from "components/ContextWrapper";

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      console.log("First Contentful Paint", metric);
      break
    case 'LCP':
      // handle LCP results
      break
    case 'CLS':
      // handle CLS results
      break
    case 'FID':
      // handle FID results
      break
    case 'TTFB':
      console.log("Time to First Byte", metric);
      break
    default:
      break
  }
}

function MyApp({ Component, pageProps, navigation }) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<ContextWrapper navigation={navigation}>
					<Header isDark={true} />
				</ContextWrapper>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

const { publicRuntimeConfig } = getConfig();
MyApp.getInitialProps = async () => {
	const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
	const navigation = await res.json();

	return { navigation };
};

export default MyApp;
