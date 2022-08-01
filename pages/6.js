import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Page6() {
  return (
    <div className="container">
      <Head>
        <title>Page 6</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to page 6" />
        <p className="description">Page 6</p>
      </main>

      <Footer />
    </div>
  );
}
