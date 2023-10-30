import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000"
          className="logo"
          alt="Logo"
          title="First Project"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contect</li>
          <li>Cart Logo</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = () => {
  return (
    <div className="restro-card">
      <img
        src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"
        alt="card-image"
        title="here will be the image title or its name"
      />
      <h3>Megna Food</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restro-container">
        <RestroCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
