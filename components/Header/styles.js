import styled from "@emotion/styled";
import { rem } from "polished";

export const StyledHeader = styled.header`
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
