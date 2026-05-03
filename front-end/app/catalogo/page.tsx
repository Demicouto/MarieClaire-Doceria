import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./catalogo.module.css";

const products = [
  {
    name: "Brownie recheado",
    price: "R$ 151,20",
    oldPrice: "R$ 168,00",
    image: "/figma/catalogo/review-1.png",
  },
  {
    name: "Brownie com gotas",
    price: "R$ 6.00",
    oldPrice: "R$ 6,66",
    image: "/figma/catalogo/review-2.png",
  },
  {
    name: "Cookie recheado com nutella",
    price: "R$ 8,00",
    oldPrice: "R$ 8,88",
    image: "/figma/catalogo/review-3-75bce8.png",
  },
  {
    name: "Brownie tradicional",
    price: "R$ 5.00",
    oldPrice: "R$ 5,55",
    image: "/figma/catalogo/review-4.png",
  },
  {
    name: "Brownie tradicional",
    price: "R$ 5.00",
    oldPrice: "R$ 5,55",
    image: "/figma/catalogo/review-1.png",
  },
];

const reviews = [
  {
    quote: "Simplesmente perfeito! O melhor\nbrownie que comemos na\nfaculdade",
    product: "Brownie Tradicional",
    date: "27/04/2026",
    image: "/figma/catalogo/review-1.png",
  },
  {
    quote: "Tudo da Marie Claire é perfeito. Vai\ncomer doce/açúcar? na boa,\ncoma algo que presta.",
    product: "Brownie Recheado",
    date: "28/04/2026",
    image: "/figma/catalogo/review-2.png",
  },
  {
    quote: "Excelente",
    product: "Cookie recheado com nutella",
    date: "30/04/2026",
    image: "/figma/catalogo/review-3-75bce8.png",
  },
  {
    quote: "Maravilhoso…\nO melhor brownie que já provei",
    product: "Brownie Tradicional",
    date: "12/04/2026",
    image: "/figma/catalogo/review-4.png",
  },
];

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className={styles.catalogoPage}>
        <section className={styles.catalogSection}>
          <h1 className={styles.catalogTitle}>Catálogo</h1>

          <div className={styles.productViewport}>
            <div className={styles.productTrack}>
              {products.map((product, index) => (
                <article key={`${product.name}-${index}`} className={styles.productCard}>
                  <div className={styles.productImageWrap}>
                    <Image src={product.image} alt={product.name} width={450} height={600} />
                    <span className={styles.discountBadge}>-10%</span>
                    <button className={styles.addButton} type="button">
                      Adicionar ao carrinho
                    </button>
                  </div>

                  <div className={styles.productInfo}>
                    <h2>{product.name}</h2>
                    <p className={styles.priceWrap}>
                      <span className={styles.price}>{product.price}</span>
                      <span className={styles.oldPrice}>{product.oldPrice}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.reviewsSection}>
          <header className={styles.reviewsHeader}>
            <h2>Deixe os clientes falarem por nós</h2>
            <p>
              de 872 avaliações <span aria-hidden="true">★</span>
            </p>
          </header>

          <div className={styles.reviewsViewport}>
            <div className={styles.reviewsTrack}>
              {reviews.map((review) => (
                <article key={`${review.product}-${review.date}`} className={styles.reviewCard}>
                  <div className={styles.reviewImageWrap}>
                    <Image src={review.image} alt={review.product} width={491} height={737} />
                  </div>

                  <div className={styles.reviewBody}>
                    <Image src="/figma/stars.svg" alt="5 estrelas" width={108} height={20} />
                    <p className={styles.reviewQuote}>{review.quote}</p>
                    <p className={styles.reviewMeta}>{review.product}</p>
                    <p className={styles.reviewMeta}>{review.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
