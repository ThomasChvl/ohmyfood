export default function MenuItem({ id, name, description, price }) {
  return (
    <div className="menu-item">
      <input type="checkbox" id={id} />
      <label htmlFor={id} className="item-label">
        <span className="description">
          <span className="item-title">{name}</span>
          <span className="item-details">{description}</span>
        </span>
        <span className="price">{price}</span>
        <span className="checkmark">
          <i className="fas fa-check-circle fa-2x"></i>
        </span>
      </label>
    </div>
  );
}
