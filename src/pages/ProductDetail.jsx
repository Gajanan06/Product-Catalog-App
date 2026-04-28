import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = data[Number(id)];

  if (!item) {
    return <div className="not-found">Item not found</div>;
  }

  return (
    <div className="product-detail">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <h2 className="product-title">{item.itemname}</h2>

      <p className="product-category">
        <strong>Category:</strong> {item.category}
      </p>

      <img
        className="product-image"
        src={item.image}
        alt={item.itemname}
      />

      <div className="product-specs">
        <h3>Specifications:</h3>

        <ul>
          {item.itemprops.map((prop, index) => (
            <li key={index} className="product-spec-item">
              <strong>{prop.label}:</strong> {prop.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;