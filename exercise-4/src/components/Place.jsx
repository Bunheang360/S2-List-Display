export default function Place({ id, title, imageSrc, imageAlt }) {
  return (
    <li key={id} className="place-item">
      <button>
        <img src={imageSrc} alt={imageAlt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}