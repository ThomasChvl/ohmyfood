import Link from "next/link";
import { notFound } from "next/navigation";
import MenuItem from "../../../Components/MenuItem";
import restaurants from "../../../data/restaurants.json";

// Les quatre slugs connus sont préparés à la compilation ; les autres renvoient 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({ slug: restaurant.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);

  return { title: restaurant?.pageTitle ?? "Ohmyfood - Page introuvable" };
}

export default async function RestaurantPage({ params }) {
  const { slug } = await params;
  const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <header>
        <div className="header-top">
          <Link href="/" className="back-arrow">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <img src="/images/logo/ohmyfood.png" alt="Logo Ohmyfood" />
        </div>
      </header>

      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.menuImageAlt} />
      </div>

      <div className="background-deskstop-color">
        <div className="background-deskstop">
          <div className="restaurant-info">
            <h1>{restaurant.name}</h1>

            <div className="favorite-container" key={restaurant.slug}>
              <input
                type="checkbox"
                id="heart-toggle"
                className="favorite-checkbox"
              />
              <label htmlFor="heart-toggle" className="favorite-label">
                <i className="fa-regular fa-heart empty-heart"></i>
                <i className="fa-solid fa-heart filled-heart"></i>
              </label>
            </div>
          </div>

          {restaurant.menu.map((category) => (
            <section className="menu-category" key={category.id}>
              <h2>{category.title}</h2>
              <div className="underline"></div>
              {category.items.map((item) => (
                <MenuItem key={`${restaurant.slug}-${item.id}`} {...item} />
              ))}
            </section>
          ))}

          <div className="button-container">
            <button className="button-restau">Commander</button>
          </div>
        </div>
      </div>

      <footer>
        <div className="logo">
          <img src="/images/logo/ohmyfood@2x.svg" alt="Logo Ohmyfood" />
        </div>

        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#top">
                <i className="fa-solid fa-utensils"></i>
                Proposer un restaurant
              </a>
            </li>
            <li>
              <a href="#top">
                <i className="fa-solid fa-handshake-angle"></i>
                Devenir partenaire
              </a>
            </li>
            <li>
              <a href="#top">Mentions légales</a>
            </li>
            <li>
              <a href="#top">Contact</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
