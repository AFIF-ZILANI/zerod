"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="w-[80px] h-[45px] overflow-hidden flex justify-center items-center rounded-lg">
              <Logo className='w-[120px] h-[120px]'/>
              </div>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Home
            </Link>
            <Link href="/services" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Services
            </Link>
            <Link href="/projects" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Projects
            </Link>
            <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/services" className="block px-3 py-2 text-base font-medium">
              Services
            </Link>
            <Link href="/projects" className="block px-3 py-2 text-base font-medium">
              Projects
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}