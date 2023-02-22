import React from "react";
import AuthLayout from "../../../components/Layouts/AuthLayout";
import { FormContainer, InputContainer, Label, Input } from "../../theme/forms";
import { PageHeader, Button } from "../../theme/general";
import { PageTitle, Paragraph } from "../../theme/typography";

const SignIn = () => {
	return (
		<AuthLayout>
			<PageHeader>
				<PageTitle align="center">Καλωσορίσατε και πάλι!</PageTitle>
				<Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dignissimos odit sit suscipit ad numquam accusantium! Minus autem repellat libero?</Paragraph>
			</PageHeader>
			<FormContainer gap={30} itemsCenter>
				<InputContainer>
					<Label fontSize="s" htmlFor="email">
						Email
					</Label>
					<Input required width={350} type="email" name="email" id="email" />
				</InputContainer>
				<InputContainer>
					<Label fontSize="s" htmlFor="password">
						Password
					</Label>
					<Input required width={350} type="password" name="password" id="password" />
				</InputContainer>
				<InputContainer direction="row">
					<Input required type="checkbox" name="terms" id="terms" />
					<Label fontSize="xs" htmlFor="terms">
						Συμφωνώ με τους όρους χρήσης και την πολιτική απορρήτου
					</Label>
				</InputContainer>
				<InputContainer>
					<Button variant="primary">Σύνδεση</Button>
				</InputContainer>
			</FormContainer>
		</AuthLayout>
	);
};

export default SignIn;
