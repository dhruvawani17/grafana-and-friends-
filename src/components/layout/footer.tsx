import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { GrafanaLogo } from '@/components/icons/grafana-logo';

export default function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold">
            <GrafanaLogo className="h-6 w-6 text-primary" />
            <span>Grafana & Friends Mumbai</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Grafana and Friends Mumbai. All rights reserved.</p>
          <p className="mt-1">
            Designed by an AI assistant.
          </p>
        </div>
      </div>
    </footer>
  );
}
