import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Page4() {
  return (
    <div className="container">
      <Head>
        <title>Page 4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to page 4" />
        <p className="description">Page 4</p>
      </main>

      <Footer />
    </div>
  );
}
