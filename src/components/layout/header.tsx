'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-[#f9a825]"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="group flex items-center gap-2 font-headline text-lg font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90">
          <div className="relative h-8 w-8 transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110">
            <Image src="/logo-header.png" alt="Grafana & Friends Mumbai" fill className="object-contain" />
          </div>
          <span className="relative">
            Grafana & Friends Mumbai
            <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-lg font-bold md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-1 py-2 text-primary-foreground/90 transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">{link.label}</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex bg-blue-200 hover:bg-blue-300 text-blue-900 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-blue-400/50">
                <Link href="/join">
                Join Now
                </Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden text-primary-foreground border-primary-foreground/50 transition-all duration-300 hover:bg-primary-foreground/20 hover:text-white hover:scale-110 hover:border-primary-foreground">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle asChild>
                      <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                          <Image src="/logo-header.png" alt="G&F Mumbai" width={32} height={32} className="h-8 w-auto" />
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
                          onClick={() => setIsOpen(false)}
                      >
                          {link.label}
                      </Link>
                      ))}
                      <Button asChild className="bg-white text-black text-lg font-bold mt-4 w-full h-12 rounded-full shadow-lg hover:scale-105 hover:shadow-xl hover:bg-gray-50 transition-all duration-300" onClick={() => setIsOpen(false)}>
                          <Link href="/join">
                          Join Now
                          </Link>
                      </Button>
                  </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
