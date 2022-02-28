import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';



type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "TypeScript Next.js Stripe Example",
}: Props) => (
  <>

    <Head>
      <title>{title}</title>
    </Head>
    
   
    <div className="container">{children}</div>
    <Toaster position='top-right' toastOptions={{
          duration: 3000,
        }}
         />
  </>
);

export default Layout;
