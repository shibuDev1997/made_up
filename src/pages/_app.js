import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
