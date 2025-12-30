'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { GrafanaLogo } from '@/components/icons/grafana-logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#speakers', label: 'Speakers' },
  { href: '/#schedule', label: 'Schedule' },
  { href: '/#contests', label: 'Contests' },
  { href: '/badge', label: 'Badge' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-primary"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold text-primary-foreground">
          <GrafanaLogo className="h-6 w-6" />
          <span>Grafana & Friends Mumbai</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://konfhub.com/gafm26#tickets" target="_blank" rel="noopener noreferrer">
                Register Now
                </a>
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <Menu className="h-6 w-6 text-accent hover:text-accent-foreground" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle asChild>
                      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                          <GrafanaLogo className="h-6 w-6 text-primary" />
                          <span>G&F Mumbai</span>
                      </Link>
                    </SheetTitle>
                     <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                  </SheetHeader>
                  <nav className="grid gap-6 text-lg font-medium mt-8">
                      {navLinks.map((link) => (
                      <Link
                          key={link.href}
                          href={link.href}
                          className="text-muted-foreground transition-colors hover:text-primary"
                      >
                          {link.label}
                      </Link>
                      ))}
                      <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                          <a href="https://konfhub.com/gafm26#tickets" target="_blank" rel="noopener noreferrer">
                          Register Now
                          </a>
                      </Button>
                  </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
