import data from "../data/data.json";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
//   console.log(groupedData);

  return (
    <div className="container">
      {Object.keys(groupedData).map((category) => (
        <div key={category} className="category">
          <h3>{category}</h3>

          <div className="grid">
            {groupedData[category].map((item) => {
            const originalIndex = data.findIndex(
            (d) => d.itemname === item.itemname
            );

         return (
         <div
          key={originalIndex}
          className="card"
          onClick={() => navigate(`/product/${originalIndex}`)}>
         <img src={item.image} alt={item.itemname} />
          <p>{item.itemname}</p>
          </div>
          );
          })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;