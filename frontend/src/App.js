import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SubTopic from "./pages/SubTopic/SubTopic";
import Topic from "./pages/Topic/Topic";
import Footer from "./sections/Footer/Footer";
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

const SubTopicPage = () => {
  const params = useParams();
  return <SubTopic subtopic={params.subtopic} />;
};
function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:topic">
            <Route path="" Component={TopicPage} />
            <Route path=":subtopic" Component={SubTopicPage} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
