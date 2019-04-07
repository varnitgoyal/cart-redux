import React, { Component } from "react";
import ProductManager from "./components/Products/Containers/ProductsManager";
import CartManager from "./components/Cart/Containers/CartManager/CartManager";
import Header from "./components/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(fas)
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />

        <div className="App">
          <ProductManager />

          <CartManager />
        </div>
      </div>
    );
  }
}

export default App;
