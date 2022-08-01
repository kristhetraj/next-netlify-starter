import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Page3() {
  return (
    <div className="container">
      <Head>
        <title>Page 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to page 3" />
        <p className="description">Page 3</p>
      </main>

      <Footer />
    </div>
  );
}
