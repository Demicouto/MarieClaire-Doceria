import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./home.module.css";

const reviews = [
  {
    quote: "Simplesmente perfeito! O melhor brownie que já comemos na faculdade",
    name: "Brownie Tradicional",
    date: "27/04/2026",
    image: "/figma/catalogo/review-1.png",
  },
  {
    quote: "A textura e o sabor são incriveis. Atendimento impecável em cada pedido",
    name: "Cookie Artesanal",
    date: "26/04/2026",
    image: "/figma/catalogo/review-2.png",
  },
  {
    quote: "Pedido chegou rapido e muito bem embalado. Qualidade acima do esperado",
    name: "Cookie Recheado com Nutella",
    date: "25/04/2026",
    image: "/figma/catalogo/review-3-75bce8.png",
  },
  {
    quote: "Uma experiência deliciosa do inicio ao fim.",
    name: "Brownie Tradicional",
    date: "24/04/2026",
    image: "/figma/catalogo/review-4.png",
  },
];

const benefits = [
  {
    icon: "/figma/home/benefit-frete.svg",
    alt: "Icone frete grátis",
    title: "FRETE GRÁTIS",
    subtitle: "",
  },
  {
    icon: "/figma/home/benefit-entrega.svg",
    alt: "Ícne entrega",
    title: "Entregamos na ete/upe surubim.",
    subtitle: "",
  },
  {
    icon: "/figma/home/benefit-agendado.svg",
    alt: "Icone agendamento",
    title: "Receba no mesmo dia",
    subtitle: "ou Agende sua Encomenda",
  },
];

const products = [
  {
    name: "Brownie recheado",
    price: "R$ 8,00",
    oldPrice: "R$ 8,88",
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
];

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <section className={styles.hero}>
          <Image
            src="/figma/hero-banner.png"
            alt="Promocao principal"
            width={1920}
            height={580}
            priority
          />
        </section>

        <section className={styles.benefits}>
          {benefits.map((item) => (
            <div key={item.title}>
              <Image src={item.icon} alt={item.alt} width={40} height={40} />
              <p>
                {item.title}
                {item.subtitle ? <span>{item.subtitle}</span> : null}
              </p>
            </div>
          ))}
        </section>

        <section className={styles.productsSection}>
          <h2>Produtos</h2>
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <article key={product.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={product.image} alt={product.name} width={450} height={600} />
                </div>

                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p className={styles.priceWrap}>
                    <span className={styles.price}>{product.price}</span>
                    <span className={styles.oldPrice}>{product.oldPrice}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <Link className={styles.ctaLink} href="/catalogo">
            VOU APROVEITAR
          </Link>
        </section>

        <section className={styles.reviewsSection}>
          <h2>Deixe os clientes falarem por nos</h2>
          <p className={styles.subtitle}>avaliacoes</p>

          <div className={styles.reviewsGrid}>
            {reviews.map((review) => (
              <article key={review.name + review.date} className={styles.reviewCard}>
                <div className={styles.reviewImageWrap}>
                  <Image src={review.image} alt={review.name} width={491} height={737} />
                </div>
                <div className={styles.reviewBody}>
                  <Image src="/figma/stars.svg" alt="5 estrelas" width={108} height={20} />
                  <p className={styles.reviewQuote}>{review.quote}</p>
                  <p className={styles.reviewName}>{review.name}</p>
                  <p className={styles.reviewDate}>{review.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.aboutText}>
            <h2>
              sabor & tradição em cada
              <br />
              detalhe
            </h2>
            <p>
              Desde sua fundação, Marie Claire transforma ingredientes selecionados
              em verdadeiras obras de arte gastronomicas. Cada doce, chocolate ou
              presente carrega a dedicação de uma profissional apaixonada pelo que
              faz. Seja para celebrar momentos especiais ou tornar o dia mais doce,
              Marie Claire e sinonimo de qualidade e sofisticacao. Descubra mais
              sobre nossa historia e o que nos inspira a criar delicias incomparaveis.
            </p>
            <a href="#">Saiba mais</a>
          </div>

          <div className={styles.aboutImageWrap}>
            <Image
              src="/figma/about-photo.png"
              alt="Atelier Marie Claire"
              width={1570}
              height={1657}
            />
          </div>
        </section>

        <section className={styles.instagramSection}>
          <div className={styles.instagramHead}>
            <h2>momentos #marieclairepe</h2>
            <a href="https://www.instagram.com/marieclairepe" target="_blank" rel="noopener noreferrer">
              <span>@marieclairepe</span>
            </a>
          </div>
          <p className={styles.storyText}>Publique um Stories nos marcando!</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
