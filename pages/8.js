import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Page8() {
  return (
    <div className="container">
      <Head>
        <title>Page 8</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to page 8" />
        <p className="description">Page 8</p>
      </main>

      <Footer />
    </div>
  );
}
