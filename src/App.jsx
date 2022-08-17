import { Layout } from "./Components/Layout/Layout";
import { Movies } from "./Components/Pages/Movies/Movies";
import { Routes, Route } from "react-router-dom";
import { MovieDetail } from "./Components/Pages/Movies/MovieDetail";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path=":id" element={<MovieDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
