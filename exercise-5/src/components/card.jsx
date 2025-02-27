export default function Card({ title, description, imageSrc }) {
    return (
      <div className="card">
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }