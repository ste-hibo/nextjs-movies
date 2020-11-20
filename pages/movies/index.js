import fetch from "isomorphic-unfetch";
import { Box, Flex } from "reflexbox";
import { useRouter } from "next/router";

const ITEMS_PER_PAGE = 3;

function MoviesPage({ movies, page, numberOfMovies }) {
	const router = useRouter();

	const lastPage = Math.ceil(numberOfMovies / ITEMS_PER_PAGE);

	return (
		<Box variant="container" pt={40}>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						<h3>{movie.title}</h3>
					</li>
				))}
			</ul>
			<Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
				<button onClick={() => router.push(`/movies?page=${Number(page) - 1}`)} disabled={page <= 1}>
					Previous
				</button>
				<button onClick={() => router.push(`/movies?page=${Number(page) + 1}`)} disabled={page >= lastPage}>
					Next
				</button>
			</Flex>
		</Box>
	);
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
	const { API_URL } = process.env;

	const start = +page === 1 ? 0 : (+page - 1) * ITEMS_PER_PAGE;
	const numberOfMoviesRes = await fetch(`${API_URL}/movies/count`);
	const numberOfMovies = await numberOfMoviesRes.json();

	const res = await fetch(`${API_URL}/movies?_limit=${ITEMS_PER_PAGE}&_start=${start}`);
	const data = await res.json();

	return {
		props: {
			movies: data,
			page: page,
			numberOfMovies: numberOfMovies,
		},
	};
};

export default MoviesPage;
