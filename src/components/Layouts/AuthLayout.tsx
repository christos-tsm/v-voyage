import React from "react";
import { LayoutContainer } from ".";
import Navigation from "../Common/Navigation";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navigation />
			<LayoutContainer>AuthLayout</LayoutContainer>;
		</>
	);
};

export default AuthLayout;
