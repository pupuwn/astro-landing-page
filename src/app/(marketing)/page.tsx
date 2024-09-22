import { Wrapper, Container } from '@/components';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Sparkle from '../../../public/icons/sparkles-dark.svg';
import Dash from '../../../public/assets/dashboard.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BorderBeam } from '@/components/ui/border-beam';

const HomePage = () => {
  return (
    <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
      {/* Hero */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"></span>
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900"></span>
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                <Image src={Sparkle} alt={'✨'} width={24} height={24} className="w-4 h-4" />
                Introducing Astro AI
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>

            <div className="flex flex-col items-center mt-8 max-w-3xl mx-auto w-11/12 md:w-full">
              <h1 className="text-4xl md:text-6xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-100 text-transparent">Build your next idea and ship your dream site</h1>
              <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">Zero code, minimum speed. Make profesional sites easy, fast and fun while delivering best-in-class SEO, performance.</p>
              <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12`">
                <Link
                  href={'/'}
                  className="flex items-center justify-center rounded-full mt-8 md:mt-12 w-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-8 shadow-2xl shadow-foreground/40 cursor-pointer select-none"
                >
                  <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:marker:pr-0">✨ Start building your dream website now!</p>
                  <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center mx-auto py-10 md:py-20 w-full">
              <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 -translate-y-1/2  h-3/4 inset-0 blur-[10rem]"></div>
              <div className="-m-2 md:-m-4 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl bg-opacity-50 backdrop-blur-lg">
                <Image 
                  src={Dash} 
                  alt={'Dashboard'} 
                  width={1200} 
                  height={1200} 
                  className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border" 
                />

                <BorderBeam 
                  size={250}
                  duration={12}
                  delay={9}
                />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
