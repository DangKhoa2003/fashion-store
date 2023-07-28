import './globals.css';
import 'aos/dist/aos.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';

const font = Urbanist({ subsets: ['latin'] });
export const revalidate = 0;

export const metadata: Metadata = {
      title: 'Fashion Store',
      description: 'Store - The place for all your purchases.',
};

export default function RootLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <html lang="en">
                  <body className={`${font.className} relative top-0 left-0`}>
                        <ModalProvider />
                        <ToastProvider />
                        <Header />
                        {children}
                        <Footer />
                  </body>
            </html>
      );
}
