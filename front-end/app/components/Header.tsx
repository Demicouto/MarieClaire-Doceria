import Image from "next/image";
import Link from "next/link";

const navItems = ["Produtos", "Catálogo", "Encomendas", "Nossa História"];

export default function SiteHeader() {
  return (
    <>
      <section className="announcement">
        <p>
          ENCOMENDA COMBINADA - PARA COMPRAS EFETUADAS ATÉ AS 18HS. DISPONÍVEL AS
          SEGUNDAS E TERÇAS
        </p>
      </section>

      <header className="siteHeader">
        <div className="headerTop">
          <Link className="logoLink" href="/">
            <Image src="/figma/logo-main.svg" alt="Marie Claire" width={386} height={102} />
          </Link>

          <div className="searchWrap">
            <Image src="/figma/search-icon.svg" alt="" aria-hidden="true" width={24} height={24} />
            <input type="search" placeholder="O QUE VOCE ESTA PROCURANDO?" />
          </div>

          <div className="headerActions">
            <Link href="/Auth/login" aria-label="Conta">
              <Image src="/figma/icon-user.svg" alt="" aria-hidden="true" width={40} height={40} />
            </Link>
            <a href="#" aria-label="Carrinho">
              <Image src="/figma/icon-bag.svg" alt="" aria-hidden="true" width={40} height={40} />
            </a>
            <a href="#" aria-label="WhatsApp">
              <Image src="/figma/icon-whatsapp.svg" alt="" aria-hidden="true" width={46} height={44} />
            </a>
          </div>
        </div>

        <nav className="primaryNav" aria-label="Principal">
          {navItems.map((item) => (
            <a key={item} href={item === "Catálogo" ? "/catalogo" : "#"}>
              {item}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
