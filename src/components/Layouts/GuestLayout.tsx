import React from "react";
import { GuestLayoutContainer } from ".";
import Navigation from "../Common/Navigation";

const GuestLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navigation />
			<GuestLayoutContainer>{children}</GuestLayoutContainer>
		</>
	);
};

export default GuestLayout;
