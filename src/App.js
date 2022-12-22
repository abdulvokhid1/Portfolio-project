import { Link, Route, Routes } from "react-router-dom";
import FeaturedProducts from "./Components/FeaturedProducts";
import About from "./pages/About/About";
import BookList from "./pages/BookList/BookList";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import NoMatch from "./pages/NoMatch/NoMatch";
import OrderSumary from "./pages/Order/OrderSumary";
import Products from "./Products";
import NewProduct from "./Components/NewProduct";
import UserDetails from "./Components/UserDetails";
import Users from "./Components/Users";
import ReactMemo from "./Components/ReactMemo";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="navbar" element={<Navbar />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="booklist" element={<BookList />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="/order-summary" element={<OrderSumary />}></Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<NewProduct />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="memopage" element={<ReactMemo />} />
        {/* <Route path="/userdetails" element={<UserDetails />} /> */}
        {/* <Route path="*" element={<NoMatch />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
