"use client"

import Image from "next/image";
import Link from "next/link";
import React, {createElement, forwardRef, MutableRefObject, useCallback, useEffect, useRef} from "react";
import {motion} from "framer-motion";
import {person, platformLinks} from '@/constants'

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {scrollToElement, throttle} from "@/lib/utils";
import { AppSplitType } from "@/components/ui/AppSplitType";
import { useSplitType } from "@/hooks/useSplitType";
import {useTheme} from "next-themes";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface SectionHeroProps {
    ref?: MutableRefObject<HTMLDivElement | null>;
}

const SectionHero = forwardRef<HTMLDivElement, SectionHeroProps>((_, ref) => {
    const scroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        scrollToElement(e.currentTarget.getAttribute('href'), 1000)
    }
    return (
        <section id="hero"
                 className="relative overflow-hidden min-h-[500px] widescreen:h-[100vh] sm:min-h-[600px] pt-16 md:flex md:justify-center md:items-center">
            {/* background section */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-[url('/images/spiral-bg-light.webp')] bg-cover bg-no-repeat bg-fixed [background-position:50%_center] opacity-100 dark:opacity-15"></div>

            <div
                className="hidden widescreen:flex items-center justify-center absolute bottom-10 left-1/2 -translate-x-1/2">
                <Link href="#about" onClick={scroll}>
                    <div className="flex flex-col items-center space-y-2 cursor-pointer">
                        <span className="text-muted-foreground sr-only">Scroll Down</span>
                        <div
                            className="w-6 h-6 border-b-4 border-r-4 border-muted-foreground rotate-45 animated-scroll-down"></div>
                    </div>
                </Link>
            </div>

            <div ref={ref}
                 className="relative z-50 grid grid-cols-1 place-items-center gap-6 md:grid-rows-[repeat(2,max-content)] max-md:pt-20 md:gap-12 px-6 align-center md:px-12 lg:px-24 xl:px-32 2xl:px-48">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3 }}
                >
                <div data-testid={'user-photo'} className="size-32 sm:size-44 md:size-48 lg:size-56 mx-auto flowing-avatar flowing-avatar--animated">
                    <div className="overflow-hidden rounded-full size-full shadow-md bg-background">
                        <Image width={640} height={640} src={person.userPhoto} alt={person.userFullName} priority/>
                    </div>
                </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3}}
                >
                    <div className="max-md:grid max-md:[grid-template-areas:'name'_'headline'_'links'] text-center" data-testid={'user-main'}>
                        {/* main section */}
                        <ul className="*:inline-block *:ml-5 [grid-area:links] max-md:mt-3">
                            {/* Links */}
                            {platformLinks.map((pl) => (
                                <li key={pl.label} className="first:ml-0">
                                    <Link href={pl.link} className="transition-colors duration-300 hover:text-accent"
                                          aria-label={pl.label}>
                                        {createElement(pl.icon[0] as any, {className: 'size-6', ...pl.icon[1]})}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h3 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:mt-6 font-bold leading-relaxed [grid-area:name] min-[365px]:highlighted-text">
                            <AppSplitType processKey={'user-full-name'} className="user-full-name" text={person.userFullName} />
                        </h3>
                        <h4 className="text-xl mt-6 md:text-3xl [grid-area:headline]">{person.userHeadline}</h4>
                    </div>
                </motion.div>
            </div>
        </section>
    );
})
SectionHero.displayName = 'SectionHero'

const AnimatedSectionHero = () => {
  const { contextSafe } = useGSAP();
  const {theme} = useTheme()

    const primaryElementRef = useRef<HTMLDivElement | null>(null)
    const scrollableTimelineRef = useRef<gsap.core.Timeline>()
    const playableTimelineRef = useRef<gsap.core.Timeline>()

    // Throttling cos the theme-change,and the split-completed will both race to invoke this
    const playIntro = useRef(throttle(contextSafe(() => {
        const primaryElement = primaryElementRef.current
        if (primaryElement === null) return
        if (playableTimelineRef.current) {
            playableTimelineRef.current.seek( '-=0', false );
            playableTimelineRef.current.clear()
            playableTimelineRef.current.kill()
        }

        const timeline = playableTimelineRef.current = gsap.timeline({ duration: .6, delay: 1, ease: 'power4.inOut', })

        // Apply the helper class before animation begins
        const node = primaryElement.querySelector('.user-full-name') as HTMLSpanElement
        node.closest('h1')?.classList.add('helper--hero-text-gsap')

        timeline
            .from(primaryElement.querySelector('[data-testid=user-main]'), {
                scale: 1.2,
                opacity: 0,
                duration: .4,
                ease: 'bounce.out'
            }, '<')
            .from(primaryElement.querySelector('[data-testid=user-photo]'), {
                scale: 1.2,
                opacity: 0,
                duration: .6,
                ease: 'bounce.out'
            }, '+=50%')
            .from(primaryElement.querySelector('.user-full-name'), {
                width: 10,
                duration: .25,
                onComplete() {
                    const node = primaryElement.querySelector('.user-full-name') as HTMLSpanElement
                    node.style.width = '';
                    node.closest('h1')?.classList.remove('helper--hero-text-gsap')
                }
            }, '+=100%')
            .from(gsap.utils.toArray(primaryElement.querySelectorAll('.user-full-name .char')), {
                scale: 0.4,
                opacity: 0,
                stagger: {
                    each: 0.04,
                    from: 'center',
                }
            }, '-=25%')
            .from(gsap.utils.toArray(primaryElement.querySelectorAll('.user-full-name .char')), {
                color: '#f26140',
                stagger: {
                    each: 0.06,
                    from: 'center',
                },
                onComplete() {
                    // This will reset the color to react with theme switching.
                    ;(primaryElement.querySelectorAll('.user-full-name .char') as NodeListOf<HTMLSpanElement>)
                        .forEach(e => (e.style.color = ''))
                }
            }, '-=25%')

        timeline.eventCallback('onComplete', () => {
            timeline.clear()
            timeline.kill()
        })
        return () => timeline.kill()
    }), 600))

    const {splittedKeys} = useSplitType('user-full-name', playIntro.current)
    useEffect(() => {
        if (splittedKeys.includes('user-full-name')) {
            playIntro.current()
        }
    }, [theme, splittedKeys])


    useGSAP(() => {
        const primaryElement = primaryElementRef.current
        if (primaryElement === null) return

        const sectionElement = primaryElement.closest('section') as HTMLDivElement
        const bgElement = sectionElement?.querySelector('.bg-fixed') as HTMLDivElement

        const timeline = scrollableTimelineRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: sectionElement,
                start: `top top`,
                end: 'bottom top',
                scrub: true,
                snap: {snapTo: 1, inertia: false, delay: .6, duration: 1, ease: "sine.out"},
            },
        })

        const setTimelines = () => {
            timeline.to(primaryElement, {
                opacity: 0,
                scale: 0.5,
                duration: 1,
            }, "<");

            timeline.to(bgElement, {
                opacity: 0,
                scale: 1.5,
                duration: 2,
            }, "<");
        }

        setTimelines()

        timeline.eventCallback('onReverseComplete', () => {
            /**
             * The following block of code exists because the hero background
             * has opacity === 1 on light theme, and opacity === 0.15 on dark theme.
             * That hack allows us to use same background image for both theme modes nicely.
             * However, when an animation begins, gsap picks this opacity value up as the default.
             * Hence, when the animation ends, and we switch theme, the opacity value is inconsistent.
             * Thus, we get a hero background that's either too bright or too transparent.
             */
            bgElement.style.opacity = ''
            timeline.clear()
            setTimelines()
        })

        return () => timeline.kill()
    })

    return (
        <SectionHero ref={primaryElementRef} />
    )
}

export {AnimatedSectionHero as SectionHero};
