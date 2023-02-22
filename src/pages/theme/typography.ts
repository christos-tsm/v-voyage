import styled from "styled-components";

export const PageTitle = styled.h1`
	font-size: 30px;
	font-weight: 600;
	text-align: ${({ align }: { align?: "center" | "right" }) => (align === "center" ? "center" : align === "right" ? "right" : "left")};
`;

export const Paragraph = styled.p`
	font-size: ${({ xs }: { xs?: boolean }) => (xs ? "11px" : "14px")};
	line-height: 30px;
`;
