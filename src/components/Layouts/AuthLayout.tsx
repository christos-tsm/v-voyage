import React from "react";
import { LayoutContainer } from "./styles";
import { FormContainer, Input, InputContainer, Label } from "../../pages/theme/forms";
import { Button, PageHeader } from "../../pages/theme/general";
import { PageTitle, Paragraph } from "../../pages/theme/typography";
import Navigation from "../Common/Navigation";
import Footer from "../Common/Footer";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navigation />
			<LayoutContainer className="main--auth">{children}</LayoutContainer>
			<Footer />
		</>
	);
};

export default AuthLayout;
