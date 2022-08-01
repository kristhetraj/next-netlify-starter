import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Page5() {
  return (
    <div className="container">
      <Head>
        <title>Page 5</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to page 5" />
        <p className="description">Page 5</p>
      </main>

      <Footer />
    </div>
  );
}
