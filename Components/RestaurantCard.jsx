"use client";

import { useState } from "react";
import Link from "next/link";

export default function RestaurantCard({
  id,
  name,
  neighborhood,
  image,
  imageAlt,
  slug,
  isNew,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const favoriteId = `heart-${id}`;

  return (
    <article className="card">
      <Link href={`/restaurant/${slug}`} className="card-link">
        <div className="card-image">
          <img src={image} alt={imageAlt} />
          {isNew && <span className="badge">Nouveau</span>}
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <p>{neighborhood}</p>
        </div>
      </Link>

      <div className="favorite-container-index">
        <input
          type="checkbox"
          id={favoriteId}
          className="favorite-checkbox"
          checked={isLiked}
          onChange={(event) => setIsLiked(event.target.checked)}
        />
        <label htmlFor={favoriteId} className="favorite-label">
          <i className="fa-regular fa-heart empty-heart"></i>
          <i className="fa-solid fa-heart filled-heart"></i>
        </label>
      </div>
    </article>
  );
}
