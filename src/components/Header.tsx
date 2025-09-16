import { appTitle, disableHeaderNavigations, navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { AppModeToggle } from "@/components/ui/AppModeToggle";

export function Header () {
    return (
        <header data-testid="page-header" className="fixed top-0 left-0 w-full z-[1000] bg-background dark:bg-background shadow-[0px_6px_10px_-5px_rgba(0,0,0,0.3)]">
        <div className="h-16 flex items-center xl:container xl:mx-auto xl:px-6 px-4">
          {!disableHeaderNavigations ? null : (
            <h1 className="text-xl font-semibold">{appTitle}</h1>
          )}
          <AppModeToggle
            className={cn({ "ml-auto": disableHeaderNavigations })}
          />
          {disableHeaderNavigations ? null : (
            <nav className="ml-auto">
              <ul className="*:inline-block">
                {navLinks.map((nl) => (
                  <li key={nl.label}>
                    <Button variant="ghost" asChild>
                      <Link href={nl.link}>{nl.label}</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    )
}
