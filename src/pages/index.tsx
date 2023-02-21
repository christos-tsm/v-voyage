import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoriesCards from "../components/Categories/CategoriesCards";
import CategoryCard from "../components/Categories/CategoryCard";
import GuestLayout from "../components/Layouts/GuestLayout";

const Home: NextPage = () => {
	return (
		<GuestLayout>
			<CategoriesCards />
		</GuestLayout>
	);
};

export default Home;
