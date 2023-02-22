import styled from "styled-components";
import { themeVariables } from "../../../pages/theme/variables";

export const FooterContainer = styled.footer`
	background-color: #f5f5f5;
	min-height: 235px;
	display: grid;
	place-items: center;
`;

export const FooterGrid = styled.div`
	max-width: 1024px;
	margin: auto;
	display: grid;
	grid-template-columns: 1fr;
	gap: 40px;

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;

export const FooterColumn = styled.div``;

export const FooterMenu = styled.ul``;

export const FooterMenuTitle = styled.h5`
	font-size: 14px;
	margin-bottom: 10px;
`;

export const FooterMenuItem = styled.li`
	&:not(:last-child) {
		margin-bottom: 6px;
	}
	a {
		font-size: 13px;
		&:hover {
			color: ${themeVariables.colors.primaryDarken};
		}
	}
`;
