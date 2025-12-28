'use client';
import { useRef, useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Copy, Download, Upload } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function BadgePage() {
  const { toast } = useToast();
  const socialText = "I am attending Grafana and Friends Mumbai 2026. #gafm26 #grafanafriendsmumbai #observability #mumbai #grafana";
  const badgeTemplate = PlaceHolderImages.find(p => p.id === 'badge-template');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [userImage, setUserImage] = useState<string | null>(null);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(socialText);
    toast({
      title: 'Copied to Clipboard!',
      description: 'You can now share it on your social media.',
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawBadge = (download = false, photoUrl?: string) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas || !badgeTemplate) return;

    canvas.width = 1200;
    canvas.height = 630;

    const base_image = new (window as any).Image();
    base_image.crossOrigin = 'anonymous';
    base_image.src = badgeTemplate.imageUrl;

    base_image.onload = () => {
      ctx.drawImage(base_image, 0, 0, canvas.width, canvas.height);

      // Simple overlay for demo
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = 'bold 60px Poppins';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.fillText('Grafana & Friends', canvas.width / 2, 100);
      ctx.fillText('Mumbai 2026', canvas.width / 2, 180);

      ctx.font = '40px Poppins';
      ctx.fillStyle = '#FFC107';
      ctx.fillText('ATTENDEE', canvas.width / 2, 550);

      if (photoUrl) {
        const user_image = new (window as any).Image();
        user_image.crossOrigin = 'anonymous';
        user_image.src = photoUrl;
        user_image.onload = () => {
            const size = 250;
            const x = canvas.width / 2 - size / 2;
            const y = canvas.height / 2 - size / 2;
            
            ctx.save();
            ctx.beginPath();
            ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            
            ctx.drawImage(user_image, x, y, size, size);
            
            ctx.beginPath();
            ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2, true);
            ctx.strokeStyle = '#FFC107';
            ctx.lineWidth = 10;
            ctx.stroke();
            ctx.restore();

            if (download) {
                downloadCanvasAsImage();
            }
        };
      } else {
        if (download) {
            downloadCanvasAsImage();
        }
      }
    };
  };

  const downloadCanvasAsImage = () => {
    const canvas = canvasRef.current;
     if(canvas){
        const link = document.createElement('a');
        link.download = 'gafm-badge.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
     }
  };
  
  const handleDownload = () => {
      drawBadge(true, userImage || undefined);
  };
  
  const handleDownloadWithoutPhoto = () => {
    drawBadge(true);
  }


  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-2 text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary"
             style={{
                background: 'linear-gradient(90deg, #F9A825, #FF5722)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}
          >
            DOWNLOAD YOUR BADGE
          </h1>
          <div className="mx-auto mt-2 h-1 w-24 bg-accent"></div>

          <section className="mt-12">
            <h2 className="font-headline text-2xl font-semibold">Share on Social Media</h2>
            <Textarea readOnly value={socialText} className="mt-4 h-32 text-base" />
            <Button onClick={handleCopyToClipboard} className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
            </Button>
          </section>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <section>
              <h2 className="font-headline text-2xl font-semibold">With your Photo</h2>
              <Card className="mt-4">
                <CardContent className="p-6">
                  <div className="relative flex justify-center items-center bg-muted rounded-md aspect-video">
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{display: 'none'}} />
                    {badgeTemplate && 
                        <Image
                            src={userImage || badgeTemplate.imageUrl}
                            alt="Badge preview"
                            width={1200}
                            height={630}
                            className={`object-contain max-h-full max-w-full ${userImage ? 'rounded-full w-32 h-32' : ''}`}
                            data-ai-hint={badgeTemplate.imageHint}
                        />
                    }
                    {!userImage && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                            <Upload className="h-10 w-10 text-white" />
                            <p className="text-white mt-2">Upload a photo</p>
                        </div>
                    )}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Button asChild variant="outline">
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="mr-2 h-4 w-4" /> Choose File
                      </label>
                    </Button>
                    <Input id="file-upload" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

                    <Button onClick={handleDownload} disabled={!userImage} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-semibold">Without your Photo</h2>
              <Card className="mt-4">
                  <CardContent className="p-6">
                  {badgeTemplate && (
                    <Image
                      src={badgeTemplate.imageUrl}
                      alt="Badge template"
                      width={1200}
                      height={630}
                      className="rounded-md"
                      data-ai-hint={badgeTemplate.imageHint}
                    />
                  )}
                  <Button onClick={handleDownloadWithoutPhoto} className="mt-4 w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Download className="mr-2 h-4 w-4" /> Download Badge
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>

          <section className="mt-16 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-400 to-rose-400 text-white">
              <a href="https://bit.ly/gafm-volunteer" target="_blank" rel="noopener noreferrer">
                Become the face of Community
              </a>
            </Button>
          </section>

          <section className="mt-16">
            <h2 className="text-center font-headline text-2xl font-semibold">Community on Twitter/X</h2>
             <div className="mt-6 mx-auto max-w-xl">
                <a className="twitter-timeline" data-height="600" data-theme="dark" href="https://twitter.com/i/lists/1544229563254927360">A Twitter List by grafanafriendsmumbai</a> 
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
             </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
