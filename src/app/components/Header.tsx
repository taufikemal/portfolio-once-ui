"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton, Switch } from "@/once-ui/components"
import styles from '@/app/components/Header.module.scss'

import { routes, display } from '@/app/resources'
import { person, home, about, blog, work, gallery } from '@/app/resources'
import ThemeSwitcher from "./ThemeSwitcher";

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <>
            {currentTime}
        </>
    );
};

export default TimeDisplay;

export const Header = () => {
    const pathname = usePathname() ?? '';

    function y(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <Flex style={{height: 'fit-content'}}
            className={styles.position}
            as="header"
            zIndex={9}
            fillWidth padding="8"
            justifyContent="center">
            <Flex
                hide="s"
                paddingLeft="12" fillWidth
                alignItems="center"
                textVariant="body-default-s">
                { display.location && (
                    <>{person.location}</>
                )}
            </Flex>
            <Flex
                background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                padding="4"
                justifyContent="center">
                <Flex
                    gap="4"
                    textVariant="body-default-s">
                    { routes['/'] && (
                        <ToggleButton
                            prefixIcon="home"
                            href="/"
                            selected={pathname === "/"}>
                            <Flex paddingX="2" hide="s">{home.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/about'] && (
                        <ToggleButton
                            prefixIcon="person"
                            href="/about"
                            selected={pathname === "/about"}>
                            <Flex paddingX="2" hide="s">{about.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/work'] && (
                        <ToggleButton
                            prefixIcon="grid"
                            href="/work"
                            selected={pathname.startsWith('/work')}>
                            <Flex paddingX="2" hide="s">{work.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/blog'] && (
                        <ToggleButton
                            prefixIcon="book"
                            href="/blog"
                            selected={pathname.startsWith('/blog')}>
                            <Flex paddingX="2" hide="s">{blog.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/gallery'] && (
                        <ToggleButton
                            prefixIcon="gallery"
                            href="/gallery"
                            selected={pathname.startsWith('/gallery')}>
                            <Flex paddingX="2" hide="s">{gallery.label}</Flex>
                        </ToggleButton>
                    )}
                </Flex>
            </Flex>

            {/* Right Section */}
            <Flex
                fillWidth
                hide="s"
                paddingRight="12"
                justifyContent="flex-end" 
                alignItems="center"
                textVariant="body-default-s">

                {/* Time Display Clock */}
                { display.time && (
                    <TimeDisplay timeZone={person.location}/>
                )}

                {/* Need Struggle How to Fix This huhuhuhu :")" */}
                {/* <Switch
                reverse
                isChecked
                onToggle={ThemeSwitcher}
                iconButtonProps={{
                    onClick: useState,
                    tooltip: 'Learn more',
                    tooltipPosition: 'bottom'
                }}
                /> */}
            </Flex>
        </Flex>
    )
}