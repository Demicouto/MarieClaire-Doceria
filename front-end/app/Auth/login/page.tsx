import Image from "next/image";
import Link from "next/link";
import styles from "../auth.module.css";

export default function LoginPage() {
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
            src="/figma/auth/login-brownie.svg"
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
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" placeholder="Insira seu Email" />
              </div>

              <div className={styles.field}>
                <label htmlFor="login-password">Senha</label>
                <input id="login-password" type="password" placeholder="Insira sua senha" />
              </div>

              <button type="submit" className={styles.submit}>
                Logar
              </button>
            </form>

            <p className={styles.switchLine}>
              <span>Ainda não tem uma conta?</span>
              <Link href="/Auth/cadastro" className={styles.switchLink}>
                Cadastre-se
              </Link>
            </p>
          </div>
        </section>
      </section>

      <p className={styles.copyright}>&copy; 2026 Marie Claire</p>
    </main>
  );
}
