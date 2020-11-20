import styled from "@emotion/styled";

export const StyledNavigation = styled.div`
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
