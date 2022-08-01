import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Page1() {
  return (
    <div className="container">
      <Head>
        <title>Page 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to page 1" />
        <p className="description">Page 1</p>
      </main>

      <Footer />
    </div>
  );
}
