import styled from "styled-components";
import { themeVariables } from "../../../pages/theme/variables";

export const NavigationContainer = styled.header`
	/* border-bottom: 1px solid #ddd; */
	padding: 3px 0;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 5;
	background-color: #fff;
`;

export const NavigationContent = styled.div`
	max-width: 1024px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavigationMenuContainer = styled.nav``;

export const NavigationMenu = styled.ul`
	display: flex;
	gap: 10px;
`;

export const NavigationMenuItem = styled.li`
	a {
		font-weight: 700;
		font-size: 14px;
		display: flex;
		padding: 4px 10px;
		border-radius: 5px;
		&:hover {
			background-color: ${themeVariables.colors.primary};
		}
	}

	&.btn {
		a {
			background-color: ${themeVariables.colors.primary};
			&:hover {
				background-color: ${themeVariables.colors.primaryDarken};
			}
		}
	}
`;
