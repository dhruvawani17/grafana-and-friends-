import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Github, Instagram, Slack } from 'lucide-react';
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
            <Link href="https://www.meetup.com/grafana-and-friends-mumbai/" target="_blank" rel="noopener noreferrer" aria-label="Meetup" className="text-muted-foreground hover:text-primary">
              <Image src="/meetup.svg" alt="Meetup" width={20} height={20} className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/grafana-user-group-mumbai-50149b386/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/grafanamumbai" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/grafanamumbai?igsh=Mmhqcnh3Zmd2bmU5" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://grafana.slack.com/archives/C01FMSQ6A8L" target="_blank" rel="noopener noreferrer" aria-label="Slack" className="text-muted-foreground hover:text-primary">
              <Slack className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Email: grafanamumbai@gmail.com</p>
          <p className="mt-1">© 2026 Copyright: Grafana & Friends - Mumbai</p>
          <p className="mt-1">Made with ♥ by Grafana & Friends Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
