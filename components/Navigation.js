import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import HeaderContext from "../contexts/HeaderContext";

function Navigation() {
	const router = useRouter();
  const { menuItems, color } = useContext(HeaderContext);

	return (
		<StyledNavigation color={color}>
			<ul>
				{menuItems.map((item) => (
					<li key={item.id}>
						<Link href={item.slug}>
							<a className={router.pathname === item.slug ? "active" : ""}>{item.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</StyledNavigation>
	);
}

const StyledNavigation = styled.div`
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;

		li {
			margin-left: 10px;
		}

		a {
			text-decoration: none;
			color: ${({ color }) => (color ? "#4f35ff" : "#c6e5ff")};

			&:hover {
				text-decoration: underline;
			}

			&.active {
				color: ${({ color }) => (color ? "#0f0f0f" : "#76ffc0")};
			}
		}
	}
`;

export default Navigation;
