import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contato.module.css";

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className={styles.contatoPage}>
        <section className={styles.heroSection}>
          <div className={styles.heroImage}>
            <Image
              src="/figma/contato/image-18-52ded0.png"
              alt=""
              width={432}
              height={387}
              priority
            />
          </div>
          <h1 className={styles.title}>Vamos adoçar seu dia?</h1>
          <p className={styles.subtitle}>
            Fale conosco, para duvidas encomendas parcerias ou qualquer mensagem especial
          </p>
        </section>

        <h2 className={styles.faleConosco}>
          <b>Fale conosco</b>!
        </h2>

        <section className={styles.contactGrid}>
          {/* Whatsapp */}
          <div className={styles.contactCard}>
            <Image
              src="/figma/contato/image-25.png"
              alt="Whatsapp"
              width={136}
              height={136}
              className={styles.cardIcon}
            />
            <h3 className={styles.cardTitle}>Whatsapp</h3>
            <p className={styles.cardInfo}>(81) 99628-7296</p>
            <p className={styles.cardSubInfo}>
              Atendimentos de segunda a domingo<br />das 9h às 21h
            </p>
          </div>

          {/* Instagram */}
          <div className={styles.contactCard}>
            <Image
              src="/figma/contato/image-27.png"
              alt="Instagram"
              width={136}
              height={136}
              className={styles.cardIcon}
            />
            <h3 className={styles.cardTitle}>instagram</h3>
            <p className={styles.cardInfo}>@marieclairepe</p>
            <p className={styles.cardSubInfoInter}>Acompanhe nossas novidades</p>
          </div>

          {/* Email */}
          <div className={styles.contactCard}>
            <Image
              src="/figma/contato/image-24.png"
              alt="Email"
              width={136}
              height={136}
              className={styles.cardIcon}
            />
            <h3 className={styles.cardTitle}>Email</h3>
            <p className={styles.cardInfo}>contato.marieclairepe@gmail.com</p>
            <p className={styles.cardSubInfoInter}>Respondemos em ate 4h</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
