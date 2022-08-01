import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Page2() {
  return (
    <div className="container">
      <Head>
        <title>Page 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to page 2" />
        <p className="description">Page 2</p>
      </main>

      <Footer />
    </div>
  );
}
