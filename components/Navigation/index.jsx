import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import HeaderContext from "../../contexts/HeaderContext";
import { StyledNavigation } from "./styles";

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

export default Navigation;
