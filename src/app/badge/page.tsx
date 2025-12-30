'use client';
import { useRef, useState, useEffect } from 'react';
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
import TwitterTimeline from '@/components/twitter-timeline';

export default function BadgePage() {
  const { toast } = useToast();
  const socialText = "I am attending Grafana and Friends Mumbai 2026. #gafm26 #grafanafriendsmumbai #observability #mumbai #grafana";
  const badgeTemplate = PlaceHolderImages.find(p => p.id === 'badge-template');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    if (!isClient) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas || !badgeTemplate) return;

    const badgeImage = new (window as any).Image();
    badgeImage.crossOrigin = 'anonymous';
    badgeImage.src = badgeTemplate.imageUrl;

    badgeImage.onload = () => {
        // Set canvas to image dimensions
        canvas.width = badgeImage.width;
        canvas.height = badgeImage.height;

        // Draw the badge template
        ctx.drawImage(badgeImage, 0, 0, canvas.width, canvas.height);

        if (photoUrl) {
            const user_image = new (window as any).Image();
            user_image.crossOrigin = 'anonymous';
            user_image.src = photoUrl;
            user_image.onload = () => {
                // You might need to adjust these values based on your new badge template
                const size = 250; 
                const x = (canvas.width / 2) - (size / 2);
                const y = (canvas.height / 2) - (size / 2) - 50; 

                ctx.save();
                ctx.beginPath();
                ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
                
                ctx.drawImage(user_image, x, y, size, size);
                
                ctx.beginPath();
                ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2, true);
                ctx.strokeStyle = '#FFC107'; // Example color
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

  const renderSocialText = () => {
    return socialText.split(' ').map((word, index) => {
        if (word.startsWith('#')) {
            return <span key={index} className="text-primary">{word} </span>;
        }
        return `${word} `;
    });
  };


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
            <div className="mt-4 rounded-lg border border-dashed border-primary/50 bg-muted/50 p-6">
                <p className="text-base text-muted-foreground">{renderSocialText()}</p>
            </div>
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
                    {/* Canvas for drawing is hidden but used for download */}
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{display: 'none'}} />
                    
                    {/* This is the preview area */}
                    <div className="relative w-full aspect-video">
                        {badgeTemplate && 
                            <Image
                                src={badgeTemplate.imageUrl}
                                alt="Badge preview background"
                                fill
                                style={{objectFit: 'contain'}}
                                data-ai-hint={badgeTemplate.imageHint}
                            />
                        }
                        {userImage && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={userImage}
                                    alt="Your photo"
                                    width={150}
                                    height={150}
                                    className="rounded-full object-cover border-4 border-amber-400"
                                />
                            </div>
                        )}
                         {!userImage && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-md">
                                <Upload className="h-10 w-10 text-white" />
                                <p className="text-white mt-2">Upload a photo</p>
                            </div>
                        )}
                    </div>

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
                      className="rounded-md w-full h-auto"
                      data-ai-hint={badgeTemplate.imageHint}
                      priority
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
                <TwitterTimeline />
             </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
