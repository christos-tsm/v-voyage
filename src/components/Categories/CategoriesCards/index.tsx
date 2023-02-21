import React from "react";
import { categories } from "../../../data/categories";
import CategoryCard from "../CategoryCard";
import { CategoriesCardsContainer } from "./styles";

const CategoriesCards: React.FC = () => {
	return (
		<CategoriesCardsContainer gap={30} margin="30px 0">
			{categories.map((category) => (
				<CategoryCard key={category.id} title={category.title} />
			))}
		</CategoriesCardsContainer>
	);
};

export default CategoriesCards;
