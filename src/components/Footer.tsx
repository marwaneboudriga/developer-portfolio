"use client"
import { useMemo } from "react";
import Link from "next/link";

export function Footer () {
    const currentYear = Math.max(2025, new Date().getFullYear());
    const footerLinks = useMemo(() => [
        // { label: 'Articles', link: 'https://medium.com/@ejjay' },
        { label: 'Resume', link: 'https://docs.google.com/document/d/e/2PACX-1vRBaSJImuHYeHooFXol99o1oZa43QEuKFvJtqs8FofyIcpTnXnAYGt0cQQ5xkdwlA/pub' },
    ], [])


    return (
        <footer data-testid="page-footer" className="">
          <div className="container px-4 mx-auto p-3 py-16 relative before:top-0 before:left-[15px] before:absolute before:w-[calc(100%-30px)] before:h-px before:bg-slate-300">
            <div className='flex flex-col lg:flex-row-reverse justify-between'>
              <ul className='flex justify-center max-lg:mb-8'>
                {footerLinks.map(({ label, link }) => (
                  <li key={label} className='ml-2 first:ml-0'><Link href={link} target="_blank" className="highlighted-text">{label}</Link></li>
                ))}
              </ul>
              <p className="max-lg:text-center leading-loose">
                Copyright &copy; {currentYear}<span> - </span>
                <a href="https://github.com/boudrigamarwane">
                  <span className="highlighted-text">godofbrowser</span>
                </a>{" "}
                <span className="max-sm:hidden">|</span>{" "}
                <span className="whitespace-nowrap max-sm:block">
                  Don&apos;t hesitate to reach out.
                </span>
              </p>
            </div>
          </div>
        </footer>
    )
}
