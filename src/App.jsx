import "./App.css";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <div className="App">
      <Carousel
        images={[
          "https://forever.travel-assets.com/flex/flexmanager/images/2022/11/04/house.jpeg?impolicy=fcrop&w=400&h=300&q=medium",
          "https://forever.travel-assets.com/flex/flexmanager/images/2022/11/04/condo.jpeg?impolicy=fcrop&w=400&h=300&q=medium",
          "https://forever.travel-assets.com/flex/flexmanager/images/2022/05/25/cabin.jpg?impolicy=fcrop&w=600&h=450&q=mediumHigh",
          "https://forever.travel-assets.com/flex/flexmanager/images/2022/05/25/cottage.jpg?impolicy=fcrop&w=400&h=300&q=medium",
          "https://forever.travel-assets.com/flex/flexmanager/images/2022/05/24/villa.jpg?impolicy=fcrop&w=400&h=300&q=medium",
          "https://forever.travel-assets.com/flex/flexmanager/images/2022/05/24/chalet.jpg?impolicy=fcrop&w=400&h=300&q=medium",
        ]}
        descriptions={["House", "Condo", "Cabin", "Cottage", "Villa", "Chalet"]}
      />
    </div>
  );
};

export default App;
