"use client";

import { useTheme } from "next-themes";
import { useContext, useEffect } from "react";
import { style } from "../resources";
import { Flex } from "@/once-ui/components";
import classNames from "classnames";
import { Manrope, Source_Code_Pro } from "next/font/google";

interface RootLayoutProps {
	children: React.ReactNode;
}

const primary = Manrope({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})


type FontConfig = {
    variable: string;
};

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;

export default function StylingContainer({ children } : RootLayoutProps) {
	const { theme, setTheme }= useTheme()
	useEffect(() => {
		setTheme(style.theme)
	}, [])

	return <Flex
    as="html"
	lang="en"
	background="page"
	data-neutral={style.neutral} data-brand={style.brand} data-accent={style.accent}
	data-solid={style.solid} data-solid-style={style.solidStyle}
	data-theme={theme}
	data-border={style.border}
	data-surface={style.surface}
	data-transition={style.transition}
	className={classNames(
		primary.variable,
		secondary ? secondary.variable : '',
		tertiary ? tertiary.variable : '',
		code.variable)}>{children}</Flex>
}