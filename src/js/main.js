/* eslint-disable linebreak-style */
import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

barba.init();