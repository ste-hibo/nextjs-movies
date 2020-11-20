import Link from "next/link";
import { StyledCard } from "./styles";

function Card({ movie }) {
	const { API_URL } = process.env;

	if (!movie.genre) {
		movie.genre = {};
		movie.genre.slug = "uncategorised";
	}

	const renderPoster = () => {
		return movie.poster ? (
			<div className="poster">
				<img src={`${API_URL}${movie.poster.url}`} alt="" />
			</div>
		) : null;
	};

	return (
		<StyledCard borderColor={"#cccccc"}>
			{renderPoster()}
			<div className="body">
				<h3>{movie.title}</h3>
				<p dangerouslySetInnerHTML={{ __html: movie.description }} />
				<Link href={`/movies/${movie.genre.slug}/${movie.slug}`}>
					<a>More about this movie</a>
				</Link>
			</div>
		</StyledCard>
	);
}

export default Card;
