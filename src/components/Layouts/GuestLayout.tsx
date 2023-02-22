import React from "react";
import { LayoutContainer } from ".";
import Navigation from "../Common/Navigation";

const GuestLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navigation />
			<LayoutContainer>{children}</LayoutContainer>
		</>
	);
};

export default GuestLayout;
