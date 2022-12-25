import { Link, Route, Routes } from "react-router-dom";
import { BookLayout } from "./BookLayout";
import { BookRoutes } from "./BookRoutes";
import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";


function App(){
  return (
    <>
    <Routes location="/books">
      <Route path = "/books" element = {<h1>Extra Content</h1>}/>
    </Routes>
    <nav>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/books">Books</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/books/*" element={<BookRoutes/>}>
      </Route>
      <Route path = "*" element = {<NotFound/>}/>
    </Routes>
    </>
  )
}
export default App;
