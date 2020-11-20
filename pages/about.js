import { NextSeo } from "next-seo";
import { Box } from "reflexbox";
import fetch from "isomorphic-unfetch";

function About({ page }) {
	const SEO = {
		title: page.title,
		description: "Just your nurmal about page",
		openGraph: {
			title: page.title,
			description: "Just your nurmal about page",
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<Box variant="container">
				<Box as="h2" my={40}>
					{page.title}
				</Box>
				<div dangerouslySetInnerHTML={{ __html: page.content }} />
			</Box>
		</>
	);
}

export const getStaticProps = async () => {
	const { API_URL } = process.env;
	const res = await fetch(`${API_URL}/pages/1`);
	const data = await res.json();

	return {
		props: {
			page: data,
    },
    revalidate: 1 // Incremental Static Regeneration
	};
};

export default About;
