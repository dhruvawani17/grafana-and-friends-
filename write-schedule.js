const fs = require('fs');
const content = `\"use client\";
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
  { time: '03:45 PM', title: 'Cloconst content = `\"use clienriimport { Clock } from 'lucide-react'ntimport Image from 'next/image';
impo'Eimport { useEffect, useRef, usks
const schedule = [
  { time: '10:00 AM', title: 'RleS  { time: '10:00 ns  { time: '10:30 AM', title: 'Opening Keynote', description: 'Welcome to Grafana & Friends Mumbai!'},
  { time: '11:00 AM', title: 'Talk Session s]  { time: '11:00 AM', title: 'Talk Session 1', description: 'Topic to be announced.' },
  { time: '1f   { time: '12:00 PM', title: 'Talk Session 2', description: 'Topic to be announced.' }in  { time: '01:00 PM', title: 'Lunch & Networking', description: 'Enjoy a delicious lun    { time: '02:00 PM', title: 'Talk Session 3', description: 'Topic to be announced.' },
  { time: '03:00 PM', title: 'Lightning Talkeight;
   { time: '03:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-mins(  { time: '03:45 PM', title: 'Cloconst content = `\"use clienriimport { Clock } from 'lucide-react'ntimport Image from   impo'Eimport { useEffect, useRef, usks
const schedule = [
  { time: '10:00 AM', title: 'RleS  { time: '10:00 ns  { time: '10:30 AM', tdeconst schedule = [
  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: '11:00 AM', title: 'Talk Session 1', description: 'Topic to be announced.' },
  { time: '1f   { ti    { time: '1f   { time: '12:00 PM', title: 'Talk Session 2', description: 'Topic to be announced.' }in  { time: '01:00 PM', title:r
   { time: '03:00 PM', title: 'Lightning Talkeight;
   { time: '03:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-mins(  { time: '03:45 PM', title: 'Cloconst content = `\"use clienriimport { Clock } from 'lucide-react'ntimport Image from   impo'Eimporte=   { time: '03:00 PM', title: 'Lightning Talks',   const schedule = [
  { time: '10:00 AM', title: 'RleS  { time: '10:00 ns  { time: '10:30 AM', tdeconst schedule = [
  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: '11:00 AM', title: 'Talk Session 1', des    { time: '10:00 <p  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: '    { time: '1f   { ti    { time: '1f   { time: '12:00 PM', title: 'Talk Session 2', description: 'Topic to be announced.' }in  { time: '01:00 PM', title:r
   { time: '03:0ne   { time: '03:00 PM', title: 'Lightning Talkeight;
   { time: '03:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-mins(  { time: 'ol   { time: '03:00 PM', title: 'Lightning Talks', dp-  { time: '10:00 AM', title: 'RleS  { time: '10:00 ns  { time: '10:30 AM', tdeconst schedule = [
  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: '11:00 AM', title: 'Talk Session 1', des    { time: '10:00 <p  { time: '10:00 A=   { time: '10:00 en  {  r  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: 's    { time: '03:0ne   { time: '03:00 PM', title: 'Lightning Talkeight;
   { time: '03:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-mins(  { time: 'ol   { time: '03:00 PM', title: 'Lightning Talks', dp-  { time: '10:00 AM', title: 'RleS  { time: '10:00 ns  { time: '10:30 AM', tdeconst schedule = [
  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s(
   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: '11:00 AM', title: 'Talk Session 1', des    { time: '10:00 <p  { time: '10:00 A=   { time: '10:00 en  {  r  { time: '10:00 A=   { time: '10:00 en  { time: tr   { time: '03:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-mins(  { time: 'ol   { time: '03:00 PM', title: 'Lightning Talks', dp-  { time: '10:00 AM', title: 'RleS  { time: '10:00 ns  { time: '10:30 AM', tdeconst schedule = [
  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s(
   { time: '03:0ify-center z-10  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s(
   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: \   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10-o  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s(
   { time: '03:0ify-center z-10  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s(
   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: \   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10-o  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s(
   { time: '03:0ify-center z-10  \   { time: '03:0ify-center z-10  { time: '10:00 A=   { time: '10:00 en  { time: '11-s   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10:00 A=   { time: '10:00 en  { t <   { time: '03:0ify-center z-10  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s(
   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: \   { time: '03:00 PM', title: 'Lightning Talks', desla   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10:00 A=   { time: '10:00 en  { t     { time: '03:0ify-center z-10  \   { time: '03:0ify-center z-10  { time: '10:00 A=   { time: '10:00 en  { time: '11-s   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10:00 A=   { time: '10:00 en  { t <   { time: '03:0ify-center z-10  { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: l   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10:00 A=   { time: '10:00 en  { time: '11:00 AM', title: 'Talk Session s]  { time: \   { time: '03:00 PM', title: 'Lightning Talks', desla   { time: '03:00 PM', title: 'Lightning Talks', description: 'A ser    { time: '10:00 A=   { time: '10:00 en  { t     { time: '03                })}
                    </div>
                </div>
            </div>
        </section>
    );
}
`
fs.writeFileSync('src/components/sections/schedule.tsx', content);

