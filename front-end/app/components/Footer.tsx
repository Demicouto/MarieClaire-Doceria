import Image from "next/image";
import Link from "next/link";

const institutionalLinks = [
  { label: "Quem Somos", href: "/nossahistoria" },
  { label: "Contato", href: "/contato" },
  { label: "Politica de Entrega", href: "#" },
  { label: "Troca e Devolucoes", href: "#" },
];

const productLinks = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Cookies", href: "#" },
  { label: "Brownies", href: "#" },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footerGrid">
          <div className="footerBrand">
            <Image src="/figma/logo-main.svg" alt="Marie Claire" width={342} height={100} />
          </div>

          <div>
            <h3>contato</h3>
            <ul>
              <li>
                <Image src="/figma/icon-mail.svg" alt="" aria-hidden="true" width={20} height={20} />
                contato.marieclairepe@gmail.com
              </li>
              <li>
                <Image src="/figma/icon-phone.svg" alt="" aria-hidden="true" width={20} height={20} />
                (81) 99755-1188
              </li>
              <li>
                <Image src="/figma/icon-clock.svg" alt="" aria-hidden="true" width={20} height={20} />
                Encomendas apenas final de semana.
              </li>
              <li>
                <Image
                  src="/figma/icon-clock-2.svg"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                />
                Vendas na ETE/UPE surubim, de segunda a terca.
              </li>
              <li>
                <Image
                  src="/figma/icon-instagram.svg"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                />
                marieclairepe
              </li>
            </ul>
          </div>

          <div>
            <h3>institucional</h3>
            <ul>
              {institutionalLinks.map((item) => (
                <li key={item.label}>
                  {item.href === "#" ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>produtos</h3>
            <ul>
              {productLinks.map((item) => (
                <li key={item.label}>
                  {item.href === "#" ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <p>&copy; 2026 Marie Claire.</p>
          <div>
            <a href="#">Politica de Privacidade</a>
            <a href="#">Suporte</a>
          </div>
        </div>
      </footer>

      <section className="credits">
        <p>made by demetriocoutinho.vercel.app</p>
      </section>
    </>
  );
}
