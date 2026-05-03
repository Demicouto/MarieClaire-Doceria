import Image from "next/image";
import Link from "next/link";
import styles from "../auth.module.css";

export default function CadastroPage() {
  return (
    <main className={styles.authPage}>
      <Link href="/" className={styles.logoLink}>
        <Image src="/figma/logo-main.svg" alt="Marie Claire" width={715} height={248} priority />
      </Link>

      <section className={styles.content}>
        <aside className={styles.marketing}>
          <h1>
            Seu brownie
            <br />
            favorito te espera.
          </h1>
          <p>Entre para acompanhar seus pedidos,</p>
          <p>favoritos e novidades fresquinhas.</p>
          <Image
            src="/figma/auth/cadastro-brownie.svg"
            alt=""
            aria-hidden="true"
            className={styles.brownie}
            width={469}
            height={185}
          />
        </aside>

        <section className={styles.card}>
          <div className={styles.formWrap}>
            <h2 className={styles.title}>Seja bem vindo!</h2>

            <form className={styles.fields}>
              <div className={styles.field}>
                <label htmlFor="cadastro-email">Email</label>
                <input id="cadastro-email" type="email" placeholder="Insira seu Email" />
              </div>

              <div className={styles.field}>
                <label htmlFor="cadastro-password">Senha</label>
                <input id="cadastro-password" type="password" placeholder="Insira sua senha" />
              </div>

              <div className={styles.field}>
                <label htmlFor="cadastro-confirm">Confirmar senha</label>
                <input
                  id="cadastro-confirm"
                  type="password"
                  placeholder="Insira novamente sua senha"
                />
              </div>

              <button type="submit" className={styles.submit}>
                Cadastre-se
              </button>
            </form>

            <p className={styles.switchLine}>
              <span>Ja Tem Uma Conta?</span>
              <Link href="/Auth/login" className={styles.switchLink}>
                Entre
              </Link>
            </p>
          </div>
        </section>
      </section>

      <p className={styles.copyright}>&copy; 2026 Marie Claire</p>
    </main>
  );
}
