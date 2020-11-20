import { Flex, Box } from "reflexbox";
import Navigation from "components/Navigation/index";
import ToggleNavigationColorButton from "components/ToggleNavigationColorButton";
import Link from "next/link";
import { StyledHeader } from "./styles";

function Header({ isDark }) {
	return (
		<StyledHeader isDark={isDark}>
			<Box variant="container">
				<Flex justifyContent="space-between" alignItems="center">
					<div className="logo">
						<Link href="/">
							<a>
								<img src="/images/logo.svg" alt="Sites logo" />
								<span className="logo-text">Next Movies</span>
							</a>
						</Link>
					</div>
					<Navigation />
					<ToggleNavigationColorButton />
				</Flex>
			</Box>
		</StyledHeader>
	);
}

export default Header;
