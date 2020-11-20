import styled from "@emotion/styled";

export const StyledCard = styled.div`
	width: 100%;
	border: 1px solid ${({borderColor}) => borderColor};
	margin-top: 50px;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	.body {
		padding: 20px;

		h3 {
			margin-bottom: 20px;
		}

		p {
			color: #666666;
			line-height: 1.5;
		}

		a {
			display: inline-block;
			margin: 20px 0;
		}
	}
`;