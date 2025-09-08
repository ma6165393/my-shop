
import Header from "./_components/Heder";
import ProductList from "../app/_components/ProductList";
import Footer from "./_components/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <main className="p-6">
              <ProductList />
      </main>
            <Footer />

    </div>
  );
}
