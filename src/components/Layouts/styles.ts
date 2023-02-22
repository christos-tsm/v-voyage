import styled from "styled-components";

export const LayoutContainer = styled.main`
	max-width: 1024px;
	margin: auto;
	margin-top: 70px;
	min-height: calc(100vh - 305px);

	&.main--auth {
		display: grid;
		place-content: center;
	}
`;

export const AuthLayoutContainer = styled.main``;
