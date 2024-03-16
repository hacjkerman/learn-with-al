import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Topic from "./components/Topic/Topic";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const TopicPage = () => {
  const params = useParams();
  return <Topic topic={params.topic} />;
};
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topic" Component={TopicPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
