'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Github, Youtube, Instagram, Users, Slack } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'Meetup : Grafana & Friends Mumbai',
    icon: <Image src="/meetup.svg" alt="Meetup" width={20} height={20} className="h-5 w-5" />,
    href: 'https://www.meetup.com/grafana-and-friends-mumbai/',
  },
  {
    name: 'LinkedIn : Grafana & Friends Mumbai',
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://www.linkedin.com/in/grafana-user-group-mumbai-50149b386/',
  },
  {
    name: 'Twitter : @grafanamumbai',
    icon: <Twitter className="h-5 w-5" />,
    href: 'https://twitter.com/grafanamumbai',
  },
//   {
//     name: 'YouTube : Grafana & Friends Mumbai',
//     icon: <Youtube className="h-5 w-5" />,
//     href: '#',
//   },
  {
    name: 'Slack : Grafana & Friends Mumbai',
    icon: <Slack className="h-5 w-5" />,
    href: 'https://grafana.slack.com/archives/C01FMSQ6A8L',
  },
  {
    name: 'Instagram : @grafanamumbai',
    icon: <Instagram className="h-5 w-5" />,
    href: 'https://www.instagram.com/grafanamumbai?igsh=Mmhqcnh3Zmd2bmU5',
  },
  {
    name: 'GitHub : @grafanamumbai',
    icon: <Github className="h-5 w-5" />,
    href: '#',
  },
];

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?q=80&w=2831&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]"></div>
        </div>

        <div className="w-full max-w-3xl relative z-10 flex flex-col items-center">
            <div className="mb-10 flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-700">
                 <div className="rounded-full bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/20 shadow-[0_0_40px_-10px_rgba(249,168,37,0.5)]">
                    <Image 
                      src="/grafanalogo.png" 
                      alt="Grafana Logo" 
                      width={80} 
                      height={80} 
                      className="h-20 w-20 object-contain" 
                    />
                 </div>
                 <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-headline text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-sm">
                    JOIN US
                 </h1>
                 <p className="text-lg text-gray-300 max-w-lg text-center font-light">
                    Connect with the community across all our platforms.
                 </p>
            </div>

          <div className="w-full max-w-xl space-y-4 animate-in slide-in-from-bottom-8 duration-700 delay-150">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                className="group w-full h-16 text-lg font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-white/30 justify-between px-6"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                  <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-[#F9A825] to-[#FF5722] p-2.5 rounded-xl shadow-inner group-hover:rotate-6 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <span className="text-left truncate font-headline tracking-wide">{link.name}</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                    →
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
