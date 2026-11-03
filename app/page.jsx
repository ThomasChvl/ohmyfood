import RestaurantCard from "../Components/RestaurantCard";
import restaurants from "../data/restaurants.json";

export default function Home() {
  return (
    <>
      <div className="loader-wrapper">
        <div className="loader-content">
          <img
            src="/images/logo/ohmyfood.png"
            alt="Logo Ohmyfood"
            className="logo-loader"
          />
          <p className="loader-text">Le bon goût près de chez vous</p>
        </div>
      </div>

      <header>
        <div className="header-top">
          <img src="/images/logo/ohmyfood.png" alt="Logo Ohmyfood" />
        </div>

        <div className="header-location">
          <i className="fa-solid fa-location-dot"></i>
          <span>Paris, Belleville</span>
        </div>
      </header>

      <section className="intro">
        <h2>Réservez le menu qui vous convient</h2>
        <p>
          Découvrez des restaurants d’exception, sélectionnés par nos soins.
        </p>
        <button className="button">Explorer nos restaurants</button>
      </section>

      <section className="fonctionnement">
        <h2>Fonctionnement</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-circle">
              <p className="step-number">1</p>
            </div>
            <i className="fa-solid fa-mobile-screen-button"></i>
            <p className="step-description">Choisissez un restaurant</p>
          </div>

          <div className="step">
            <div className="step-circle">
              <p className="step-number">2</p>
            </div>
            <i className="fa-solid fa-list"></i>
            <p className="step-description">Composez votre menu</p>
          </div>

          <div className="step">
            <div className="step-circle">
              <p className="step-number">3</p>
            </div>
            <i className="fa-solid fa-store"></i>
            <p className="step-description">Dégustez au restaurant</p>
          </div>
        </div>
      </section>

      <section className="restaurant">
        <h2>Restaurants</h2>

        <div className="cards-container">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              slug={restaurant.slug}
              name={restaurant.name}
              neighborhood={restaurant.neighborhood}
              image={restaurant.image}
              imageAlt={restaurant.imageAlt}
              isNew={restaurant.isNew}
            />
          ))}
        </div>
      </section>

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
            <li className="footer-deskstop-margin">
              <a href="#top">Mentions légales</a>
            </li>
            <li>
              <a href="mailto:supportclientOMF@gmail.com">Contact</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
