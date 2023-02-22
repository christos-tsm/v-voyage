import React from "react";
import { LayoutContainer } from "./styles";
import Navigation from "../Common/Navigation";
import Footer from "../Common/Footer";

const GuestLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navigation />
			<LayoutContainer>{children}</LayoutContainer>
			<Footer />
		</>
	);
};

export default GuestLayout;
