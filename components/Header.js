import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";
import Navigation from "components/Navigation";
import ToggleNavigationColorButton from "components/ToggleNavigationColorButton";
import Link from "next/link";

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

const StyledHeader = styled.header`
	background: ${({ isDark, theme }) =>
		isDark ? theme.colors.primaryDark : theme.colors.primaryLight};
	padding: 20px;

	.logo {
		a {
			display: flex;
			align-items: center;
			text-decoration: none;
		}

		.logo-text {
			color: #333333;
			font-weight: bold;
			font-size: ${rem(20)};
			margin-left: ${rem(20)};
		}
	}
`;

export default Header;
