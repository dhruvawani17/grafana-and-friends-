import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Gift } from "lucide-react";

export default function ContestsSection() {
    return (
        <section id="contests" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Contests & Giveaways
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Get involved and win some amazing prizes!
                    </p>
                </div>

                <div className="mt-12 mx-auto max-w-4xl">
                    <Tabs defaultValue="refer" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="refer">Refer and Earn</TabsTrigger>
                            <TabsTrigger value="social">Social Media Mania</TabsTrigger>
                        </TabsList>
                        <TabsContent value="refer">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Gift className="h-6 w-6 text-primary" />
                                        Refer and Earn
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground">
                                    <p>Register for the event at awsugjaipur.in and receive the customised referral link in the confirmation email.</p>
                                    <p>Share the referral link in your circle / professional network and encourage them to register for the event.</p>
                                    <p>Ensure participation of those you have referred during the event day.</p>
                                    <p>Check the leaderboard here, see your score and be among the top leaders.</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="social">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <ListChecks className="h-6 w-6 text-primary" />
                                        Social Media Mania - Unleash your creativity to win swags!
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground">
                                   <p>Register for the Event & show your excitement about ACDR-2026 in a creative way & create innovative memes.</p>
                                   <p>Post it on your socials and tag Grafana and Friends Mumbai with the hashtag.</p>
                                   <p>Winners will be announced on upcoming Sundays (3rd, 17th, 31th Jan and 14th Feb).</p>
                                   <p>Winners will get Premium Grafana Goodies on 28th Feb at Event.</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
