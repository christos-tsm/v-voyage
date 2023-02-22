import Link from "next/link";
import React from "react";
import { Paragraph } from "../../../pages/theme/typography";
import { FooterColumn, FooterContainer, FooterGrid, FooterMenu, FooterMenuItem, FooterMenuTitle } from "./styles";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterGrid>
				<FooterColumn>
					<FooterMenu>
						<FooterMenuTitle>Σχετικά με εμάς</FooterMenuTitle>
						<FooterMenuItem>
							<Link href="/">Πολιτική Απορρήτου</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">Πολιτική Cookies</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">Όροι Χρήσης</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">Blog</Link>
						</FooterMenuItem>
					</FooterMenu>
				</FooterColumn>
				<FooterColumn>
					<FooterMenu>
						<FooterMenuTitle>Εξερευνήστε την μαγνησία</FooterMenuTitle>
						<FooterMenuItem>
							<Link href="/">Νέα Αγχίαλος</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">Πήλιο</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">Αλυκές</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">Αγριά</Link>
						</FooterMenuItem>
					</FooterMenu>
				</FooterColumn>
				<FooterColumn>
					<FooterMenu>
						<FooterMenuTitle>Η εταιρεία</FooterMenuTitle>
						<FooterMenuItem>
							<Link href="/">Διαφημιστείτε</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">Ανακοινώσεις</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">Προτάσεις</Link>
						</FooterMenuItem>
					</FooterMenu>
				</FooterColumn>
				<FooterColumn>
					<FooterMenu>
						<FooterMenuTitle>Ακολουθήστε μας</FooterMenuTitle>
						<FooterMenuItem>
							<Link href="/">Facebook</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">Instagram</Link>
						</FooterMenuItem>
						<FooterMenuItem>
							<Link href="/">TikTok</Link>
						</FooterMenuItem>
					</FooterMenu>
				</FooterColumn>
			</FooterGrid>
			<Paragraph xs>&copy; 2023 Volos Voyage LLC - All rights reserved </Paragraph>
		</FooterContainer>
	);
};

export default Footer;
