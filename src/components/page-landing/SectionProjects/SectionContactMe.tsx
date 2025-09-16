"use client";

import Link from "next/link";
import { AppIcon } from "@/components/ui/AppIcon";
import { Button } from "@/components/ui/button";
import { person } from "@/constants";
import { cn } from "@/lib/utils";

const contactEmail = person.email || "boudrigamarwane@gmail.com";

function ContactItem({ icon, title, value, href }: { icon: string; title: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 py-3">
      <div className="inline-flex items-center justify-center rounded-md bg-muted/50 size-12 flex-shrink-0">
        <AppIcon name={icon} className="size-5 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{title}</p>
        <p className="text-sm font-medium break-all mt-1">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <Link href={href} className="hover:opacity-90 transition-opacity block" target={href.startsWith("http") ? "_blank" : undefined}>
        {content}
</Link>
    );
  }
  return content;
}

export function SectionContactMe() {
  return (
    <section id="contact" className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="highlighted-heading text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Let's Connect</h3>
            <div className="space-y-0 divide-y divide-border/50">
              <ContactItem icon="envelope" title="Email" value={contactEmail} href={`mailto:${contactEmail}`} />
              <ContactItem icon="linked-in" title="LinkedIn" value={"www.linkedin.com/in/marwaneboudriga"} href="https://www.linkedin.com/in/marwaneboudriga" />
              <ContactItem icon="github" title="GitHub" value={"github.com/boudrigamarwane"} href="https://github.com/boudrigamarwane" />
              <ContactItem icon="location" title="Location" value={"Fairfax, Virginia, United States"} />
            </div>

            <div className="rounded-xl border bg-card p-4 mt-1">
              <h4 className="font-medium mb-4">Current Status</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500" /> Available for new opportunities</li>
                <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500" /> Open to remote work</li>
                <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500" /> Interested in Web3 & AI projects</li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form
              action={`https://formsubmit.co/${contactEmail}`}
              method="POST"
              className="rounded-xl border bg-card p-6 space-y-4"
            >
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New message from portfolio" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
                  <input id="name" name="name" required placeholder="Your name" className="mt-1 w-full rounded-md bg-background border px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                  <input id="email" name="email" type="email" required placeholder="your.email@example.com" className="mt-1 w-full rounded-md bg-background border px-3 py-2" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm text-muted-foreground">Subject</label>
                <input id="subject" name="subject" placeholder="What's this about?" className="mt-1 w-full rounded-md bg-background border px-3 py-2" />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
                <textarea id="message" name="message" required rows={8} placeholder="Tell me about your project or opportunity..." className="mt-1 w-full rounded-md bg-background border px-3 py-2" />
              </div>

              <Button type="submit" className={cn("w-full", "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700")}> 
                <AppIcon name="send" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

SectionContactMe.displayName = "SectionContactMe";

export default SectionContactMe;


