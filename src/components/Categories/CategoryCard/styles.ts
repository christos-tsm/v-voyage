import styled from "styled-components";
import { themeVariables } from "../../../pages/theme/variables";

export const CategoryCardContainer = styled.article`
	a {
		display: flex;
		height: 60px;
		padding: 0 20px;
		align-items: center;
		justify-content: space-between;
		border: 1px solid ${themeVariables.colors.textDark};
		border-radius: 10px;
		font-size: 14px;
		&:hover {
			background-color: ${themeVariables.colors.primary};
		}
	}
`;
