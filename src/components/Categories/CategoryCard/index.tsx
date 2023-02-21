import Link from "next/link";
import React from "react";
import { ICategoryCard } from "../../../types/common";
import { CategoryCardContainer } from "./styles";

const CategoryCard: React.FC<ICategoryCard> = ({ title, icon, description }) => {
	return (
		<CategoryCardContainer>
			<h3>
				<Link href="/">{title}</Link>
			</h3>
		</CategoryCardContainer>
	);
};

export default CategoryCard;
