import data from "../data/data.json";

const Home = () => {
  const groupedData = {};

  data.forEach((item) => {
    if (!groupedData[item.category]) {
      groupedData[item.category] = [];
    }
    groupedData[item.category].push(item);
  });
  console.log(groupedData);

  return (
    <div className="container">
      {Object.keys(groupedData).map((category) => (
        <div key={category} className="category">
          <h3>{category}</h3>

          <div className="grid">
            {groupedData[category].map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.itemname} />
                <p>{item.itemname}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;