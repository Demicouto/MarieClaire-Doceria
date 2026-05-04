import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./nossahistoria.module.css";

const trustCards = [
  {
    title: "Feito com amor",
    text: "Cada receita é preparada com carinho em cada etapa do processo.",
  },
  {
    title: "Ingredientes selecionados",
    text: "Escolhemos sempre os melhores ingredientes para garantir sabor e qualidade.",
  },
  {
    title: "Qualidade sempre",
    text: "Buscamos excelência em tudo que fazemos. desde o atendimento até o produto final",
  },
];

export default function NossaHistoriaPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.quemSomosSection}>
          <div className={styles.quemSomosInner}>
            <h1>Quem somos?</h1>
            <p>
              Mais do que doces, criamos momentos especiais.
              <br />
              Feitos com ingredientes selecionados,
              <br />
              carinho em cada detalhe e o sabor que
              <br />
              transforma o seu dia.
            </p>
            <div className={styles.quemSomosImageWrap}>
              <Image
                src="/figma/nossahistoria/quem-somos-photo-118360.png"
                alt="Quem somos Marie Claire"
                width={625}
                height={568}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles.badgesSection}>
          <h2>Sabor, Qualidade e Paixão</h2>
          <div className={styles.badgesRow}>
            <p>100% artesanal</p>
            <p>Sabores Memoráveis</p>
            <p>Experiência Única em Cada Mordida</p>
          </div>
        </section>

        <section className={styles.historiaSection}>
          <div className={styles.historiaInner}>
            <h3>Nossa história</h3>
            <h2>Tudo começou com um hobby</h2>
            <p>
              Desde sua fundação, Marie Claire transforma ingredientes selecionados em verdadeiras
              obras de arte gastronômicas. Cada doce, Chocolate ou presente carrega a dedicação de
              uma profissional apaixonada pelo que faz. Seja para celebrar momentos especiais ou
              tornar o dia mais doce, Marie Claire é sinônimo de qualidade e sofisticação.
              <br />
              Descubra mais sobre nossa história e o que nos inspira a criar delícias
              incomparáveis.
            </p>
            <div className={styles.historiaImageWrap}>
              <Image
                src="/figma/nossahistoria/hero-photo-2882ed.png"
                alt="Confeitaria artesanal"
                width={658}
                height={640}
              />
            </div>
          </div>
        </section>

        <section className={styles.trustSection}>
          <h2>Por que confiar em nós?</h2>
          <div className={styles.trustGrid}>
            {trustCards.map((card) => (
              <article key={card.title} className={styles.trustCard}>
                <div className={styles.trustIconWrap}>
                  <Image
                    src="/figma/nossahistoria/badge-icon-4142ad.png"
                    alt=""
                    aria-hidden="true"
                    width={39}
                    height={41}
                  />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
