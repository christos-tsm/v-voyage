import styled from "styled-components";
import { themeVariables } from "./variables";

export const FormContainer = styled.form<{ gap?: number; itemsCenter?: boolean }>`
	display: flex;
	flex-direction: column;
	gap: ${({ gap }) => (gap ? gap + "px" : "0px")};
	align-items: ${({ itemsCenter }) => (itemsCenter ? "center" : "flex-start")};
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: ${({ direction }: { direction?: "row" | "column" }) => (direction ? direction : "column")};
	gap: 8px;
`;

export const Input = styled.input<{ width?: number }>`
	max-width: 100%;
	width: ${({ width }) => (width ? width + "px" : "auto")};
	&[type="email"],
	&[type="password"],
	&[type="text"] {
		padding: 8px 20px;
		outline: none;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

	&[type="checkbox"] {
		accent-color: ${themeVariables.colors.primary};
	}
`;

export const Label = styled.label`
	font-size: ${({ fontSize }: { fontSize: "s" | "xs" }) => (fontSize === "s" ? "14px" : fontSize === "xs" ? "12px" : "inherit")};
	font-weight: 600;
	cursor: pointer;
`;
