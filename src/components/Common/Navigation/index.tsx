import React from "react";
import Image from "next/image";

import Logo from "../../../../public/images/logo.svg";
import Link from "next/link";
import { NavigationContainer, NavigationContent, NavigationMenu, NavigationMenuContainer, NavigationMenuItem } from "./styles";

const Navigation = () => {
	return (
		<NavigationContainer>
			<NavigationContent>
				<Link href="/">
					<Image src={Logo} width={170} height={50} alt="Volos Voyage" priority />
				</Link>
				<NavigationMenuContainer>
					<NavigationMenu>
						<NavigationMenuItem>
							<Link href="/">Εκδηλώσεις</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/">Προορισμοί</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/">Ανακοινώσεις</Link>
						</NavigationMenuItem>
						<NavigationMenuItem className="btn">
							<Link href="/auth/signin">Είσοδος</Link>
						</NavigationMenuItem>
					</NavigationMenu>
				</NavigationMenuContainer>
			</NavigationContent>
		</NavigationContainer>
	);
};

export default Navigation;
