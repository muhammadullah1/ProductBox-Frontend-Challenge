import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import AddNewItems from "../Pages/AddNewItems"
import ItemsList from "../Pages/ItemsList"

export const AppRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/cart",
    element: Cart,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/itemlist",
    element: ItemsList,
  },
  {
    path: "/addnewitems",
    element: AddNewItems,
  },

];
