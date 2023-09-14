import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";
import SelectInput from "./components/SelectInput/SelectInput";
import SearchInput from "./components/SearchInput/SearchInput";
import ProductCard from "./components/ProductCard/ProductCard";
import image1 from "../src/assets/img/image1.jpg";

function App() {
  const items = [
    { id: 1, image: image1, description: "djdjfjfj", price: 12, rating: 12 },
    { id: 2, image: image1, description: "djjd", price: 13, rating: 13 },
    { id: 3, image: image1, description: "33", price: 14, rating: 14 },
  ];
  const [backend, setBackend] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackend(data));
  }, []);

  useEffect(() => {
    console.log(backend);
  }, [backend]);
  return (
    <div className="App">
      <div className="App_leftSide"></div>
      <div className="App_rightSide">
        {" "}
        <div>
          <div>
            <SearchInput />
          </div>
          <div>
            <SelectInput />
            <SelectInput
              label={false}
              options={[
                { value: "option ", label: "Option" },
                { value: "option two", label: "Option Two" },
              ]}
            />
            <SelectInput
              label={false}
              options={[
                { value: "option ", label: "Option" },
                { value: "option two", label: "Option Two" },
              ]}
            />
          </div>
        </div>
        <div className="App_cards">
          {items.map((item) => {
            return (
              <ProductCard
                image={item.image}
                description={item.description}
                price={12}
                rating={12}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
