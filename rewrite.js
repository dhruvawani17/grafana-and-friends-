const fs = require('fs');

const content = `"use client";
import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const schedule = [
  { time: '10:00 AM', title: 'Registration & Refreshments', description: 'Doors open. Grab your badge, some coffee, and meet fellow attendees.' },
  { time: '10:30 AM', title: 'Opening Keynote', description: 'Welcome to Grafana & Friends Mumbai!'},
  { time: '11:00 AM', title: 'Talk Session 1', description: 'Topic to be announced.' },
  { time: '12:00 PM', title: 'Talk Session 2', description: 'Topic to be announced.' },
  { time: '01:00 PM', title: 'Lunch & Networking', description: 'Enjoy a delicious lunch and connect with other attendees and speakers.' },
  { time: '02:00 PM', title: 'Talk Session 3', description: 'Topic to be announced.' },
  { time: '03:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-minute talks from community members.' },
  { time: '03:45 PMconst fs = require('fs');s 
const content = `"use cn: import { Clock } from 'lucidentimport Image from 'next/image';
impo'Eimport { useEffect, useRef, usks
const schedule = [
  { time: '10:00 AM', title: 'RleS  { time: '10:00 ns  { time: '10:30 AM', title: 'Opening Keynote', description: 'Welcome to Grafana & Friends Mumbai!'},
  { time: '11:00 AM', title: 'Talk Session s]  { time: '11:00 AM', title: 'Talk Session 1', description: 'Topic to be announced.' },
  { time: '1f   { time: '12:00 PM', title: 'Talk Session 2', description: 'Topic to be announced.' }in  { time: '01:00 PM', title: 'Lunch & Networking', description: 'Enjoy a delicious lun    { time: '02:00 PM', title: 'Talk Session 3', description: 'Topic to be announced.' },
  { time: '03:00 PM', title: 'Lightning Talks', deh.  { time: '03:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-minve  { time: '03:45 PMconst fs = require('fs');s 
const content = `"use cn: import { Clock } from 'lucidentimport Image from   const content = `"use cn: import { Clock } fr  impo'Eimport { useEffect, useRef, usks
const schedule = [
  { time: '10:00 AM', title: inconst schedule = [
  { time: '10:00 A    { timeveItems.pus  { time: '11:00 AM', title: 'Talk Session s]  { time: '11:00 AM', title: 'Talk Session 1', description: 'Topic to be announced.' },'scroll', handleScroll)  { time: '1f   { time: '12:00 PM', title: 'Talk Session 2', description: 'Topic to be announced.' }in  { time: '01:00 PM', title: ,   { time: '03:00 PM', title: 'Lightning Talks', deh.  { time: '03:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-minve  { time: '03:45 PMconst fs = require('fs');s 
const content = `"use cn: import { Clock } from 'lucidentimport Image from   const conte">
const content = `"use cn: import { Clock } from 'lucidentimport Image from   const content = `"use cn: import { Clock } fr  impo'Eimport { useEffect,            </h2>
                    <p className="mt-4 text-lg text-slate-800 font-medium max-w-xl mx-auto">
                        A day packed with learning and fun. The schedule is tentative and   { time: '10:00 .
  { time: '10:00 A    { timeveItems.pus  { time:
 const content = `"use cn: import { Clock } from 'lucidentimport Image from   const conte">
const content = `"use cn: import { Clock } from 'lucidentimport Image from   const content = `"use cn: import { Clock } fr  impo'Eimport { useEffect,            </h2>
                    <p className="mt-4 text-lg text-slate-800 font-medium max-w-xl mx-auto">
                        A day packed with learning and fun. The schedule is tentative and   { time: '10:00 .
  { time: '10:00 A    { timeveItems.pus  { time:
 co] const content = `"use cn: import { Clock } from 'lucidentimport Image from   const contens                     <p className="mt-4 text-lg text-slate-800 font-medium max-w-xl mx-auto">
                        A day packed with learning and fun. The schedule                          A day packed with learning and fun. The schedule is tentative and  .m  { time: '10:00 A    { timeveItems.pus  { time:
 const content = `"use cn: import { Clock } from 'lucident   const content = `"use cn: import { Clock } fro  const content = `"use cn: import { Clock } from 'lucidentimport Image from   const content                      <p className="mt-4 text-lg text-slate-800 font-medium max-w-xl mx-auto">
                        A day packed with learning and fun. The schedulesi                        A day packed with learning and fun. The schedule is tentative and  la  { time: '10:00 A    { timeveItems.pus  { time:
 co] const content = `"use cn: import { Clock } from 'luci * co] const content = `"use cn: import { Clock }ss                        A day packed with learning and fun. The schedule                          A day packed with learning and fun. The schedule is tentative and  .m  { time: '10:00 A  ow const content = `"use cn: import { Clock } from 'lucident   const content = `"use cn: import { Clock } fro  const content = `"use cn: import { Clock } from 'lucidentimport Image from   const content               la                        A day packed with learning and fun. The schedulesi                        A day packed with learning and fun. The schedule is tentative and  la  { time: '10:00 A    { timeveItems.pus  { time:
 co] const content = `"use cn: import { Clock } from 'luci * co] const conte[c co] const content = `"use cn: import { Clock } from 'luci * co] const content = `"use cn: import { Clock }ss                        A day packed with learning and fun. The schedule                          A day p s co] const content = `"use cn: import { Clock } from 'luci * co] const conte[c co] const content = `"use cn: import { Clock } from 'luci * co] const content = `"use cn: import { Clock }ss                        A day packed with learning and fun. The schedule                          A day p s co] const content = `"use cn: import { Clock } from 'luci * co] const conte[c co] const content = `"use cn: import { Clock } from 'luci * co] const content = `"use cn: import { Clock }ss                        A day packed with learning and fun. The schedule                          A day p s co] const content = `"use cn: import { Clock } from 'luci * co] const conte[c co] const content = `"use cn: import { Clock } from 'luci * c                                   </p>
                                            <h3 className={\`text-[24px] font-bold leading-tight mb-3 transition-colors duration-300 \${isActive ? 'text-black' : 'text-slate-700'}\`}>{item.title}</h3>
                                            <p className="text-slate-600 font-medium text-[16px] leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="hidden md:block w-[calc(50%_-_2rem)]"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
`;
fs.writeFileSync('src/components/sections/schedule.tsx', content);
