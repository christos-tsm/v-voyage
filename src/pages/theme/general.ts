import styled from "styled-components";
import { themeVariables } from "./variables";

export const PageHeader = styled.div`
	margin: 30px 0;
`;

type ButtonTypes = {
	variant: "primary" | "secondary";
};

export const Button = styled.button<ButtonTypes>`
	font-size: 16px;
	outline: none;
	box-shadow: none;
	width: fit-content;
	padding: 8px 20px;
	cursor: pointer;
	background-color: ${({ variant }) => (variant === "primary" ? themeVariables.colors.primary : "#fff")};
	color: ${({ variant }) => (variant === "primary" ? themeVariables.colors.textDark : themeVariables.colors.primaryDarken)};
	border: none;
	transition: all ease-in-out 250ms;
	border-radius: 5px;

	&:hover {
		background-color: ${({ variant }) => (variant === "primary" ? themeVariables.colors.primaryDarken : themeVariables.colors.primary)};
		color: ${({ variant }) => (variant === "primary" ? themeVariables.colors.textDark : themeVariables.colors.textDark)};
	}
`;
