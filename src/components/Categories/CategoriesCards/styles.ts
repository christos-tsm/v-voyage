import styled from "styled-components";

type CategoriesCardsTypes = {
	column?: boolean;
	gap?: number;
	justify?: "between" | "end";
	margin?: string;
};

export const CategoriesCardsContainer = styled.div`
	display: flex;
	flex-direction: ${({ column }: CategoriesCardsTypes) => (column ? "column" : "row")};
	gap: ${({ gap }: CategoriesCardsTypes) => (gap ? gap + "px" : "0px")};
	margin: ${({ margin }: CategoriesCardsTypes) => (margin ? margin : "auto")};
	justify-content: ${({ justify }: CategoriesCardsTypes) => {
		switch (justify) {
			case "between":
				return "space-between";
				break;
			case "end":
				return "flex-end";
				break;
			default:
				"flex-start";
		}
	}};
`;
