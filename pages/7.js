import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Page7() {
  return (
    <div className="container">
      <Head>
        <title>Page 7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to page 7" />
        <p className="description">Page 7</p>
      </main>

      <Footer />
    </div>
  );
}
