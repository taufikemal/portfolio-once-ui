import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import classNames from 'classnames';
import { Flex, Background, Switch } from '@/once-ui/components'
import { Footer, Header, RouteGuard } from "@/app/components";
import { baseURL, effects, home, person, style } from '@/app/resources'
import { Source_Code_Pro } from 'next/font/google';
import { Metadata } from "next";

// Change global typeface
import { Manrope } from 'next/font/google'
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import StylingContainer from "./components/StylingContainer";


/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
/*
*/


export const metadata: Metadata = {
	metadataBase: new URL('https://' + baseURL),
	title: home.title,
	description: home.description,
	openGraph: {
		title: `${person.firstName}'s Portfolio`,
		description: 'Portfolio website showcasing my work.',
		url: baseURL,
		siteName: `${person.firstName}'s Portfolio`,
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}
interface RootLayoutProps {
	children: React.ReactNode;
}


export default function RootLayout({ children } : RootLayoutProps) {
	return (	
		<RouteGuard>
			<ThemeProvider>
			<StylingContainer>
			<Flex style={{minHeight: '100vh'}}
				as="body"
				fillWidth margin="0" padding="0"
				direction="column">
				<Background
					gradient={effects.gradient}
					dots={effects.dots}
					lines={effects.lines}/>
				<Flex
					fillWidth
					minHeight="16">
				</Flex>
				<Header/>
				<Flex
					zIndex={0}
					fillWidth paddingY="l" paddingX="l"
					justifyContent="center" flex={1}>
					<Flex
						justifyContent="center"
						fillWidth minHeight="0">
						
							{children}
					</Flex>
				</Flex>
				<Footer/>
			</Flex>
			</StylingContainer>		
		</ThemeProvider>
		</RouteGuard>
	);
}