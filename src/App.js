import logo from "./logo.svg";
import React from "react";
import "./App.scss";
import { useEffect, useState } from "react";
import SelectInput from "./components/SelectInput/SelectInput";
import SearchInput from "./components/SearchInput/SearchInput";
import ProductCard from "./components/ProductCard/ProductCard";
import MultiRangeSlider from "./components/Ranges/MultiRangeSlider";
import StarRating from "./components/StarRatng/StarRating";
import image1 from "../src/assets/img/image1.jpg";
import Avatar from "react-avatar";
import TransparentButton from "./components/TransparentButton/TransParentButton";

function App() {
  const items = [
    { id: 1, image: image1, description: "djdjfjfj", price: 12, rating: 5 },
    { id: 2, image: image1, description: "djjd", price: 13, rating: 5 },
    { id: 3, image: image1, description: "33", price: 14, rating: 1 },
  ];
  // const [filter, setFilter] = useState([]);
  const [backend, setBackend] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [ranges, setRanges] = React.useState([{ values: [5], max: 100 }]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackend(data));
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    const filtered = items.filter((item) =>
      item.description.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  useEffect(() => {
    console.log(backend);
  }, [backend]);

  const clearSearch = () => {
    setSearchValue("");
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    const inputValue = event.target.value;

    let filtered;
    if (inputValue === "1") {
      filtered = items.filter((item) => item.rating === 1);
    } else if (inputValue === "5") {
      filtered = items.filter((item) => item.rating === 5);
    } else {
      filtered = items.filter((item) =>
        item.description.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  };

  const handleClick = () => {
    alert("Кнопка была нажата!");
  };

  return (
    <div className="App">
      <div className="App_leftSide">
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        <div className="rating-wrapper">
          <StarRating readonly={true} initialValue={5} />
          <StarRating readonly={true} initialValue={4} />
          <StarRating readonly={true} initialValue={3} />
        </div>
      </div>
      <div className="App_rightSide">
        {" "}
        <div>
          <div className="App_rightSide__top">
            <SearchInput
              searchValue={searchValue}
              handleInputChange={handleInputChange}
              clearSearch={clearSearch}
            />
            <div className="App_rightSide__top__right">
              <TransparentButton text="Watch" onClick={handleClick} />
              <Avatar name="Oleksii Mus" size={30} round="20px" />
            </div>
          </div>
          <div>
            <SelectInput
              handleChange={handleChange}
              selectedValue
              options={[
                { value: "Cheaper first", label: "Cheaper first" },
                { value: "12", label: "12" },
              ]}
            />
            <SelectInput
              handleChange={handleChange}
              selectedValue
              label={false}
              options={[
                { value: "5", label: "5" },
                { value: "2", label: "2" },
                { value: "1", label: "1" },
              ]}
            />
            {/* <SelectInput
              label={false}
              options={[
                { value: "option ", label: "Option" },
                { value: "option two", label: "Option Two" },
              ]}
            /> */}
          </div>
        </div>
        <div className="App_cards">
          {filteredItems.map((item) => {
            return (
              <ProductCard
                key={item.id}
                image={item.image}
                description={item.description}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
