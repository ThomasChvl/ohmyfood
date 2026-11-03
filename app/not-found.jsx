import Link from "next/link";

export const metadata = {
  title: "Ohmyfood - Page introuvable",
};

export default function NotFound() {
  return (
    <>
      <header>
        <div className="header-top">
          <img src="/images/logo/ohmyfood.png" alt="Logo Ohmyfood" />
        </div>
      </header>

      <main className="intro">
        <h2>404 - Page introuvable</h2>
        <p>Le restaurant ou la page que tu recherches n'existe pas.</p>
        <p>
          <Link href="/">Retour à l'accueil</Link>
        </p>
      </main>
    </>
  );
}
