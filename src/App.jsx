import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./components/Post";
import "./App.css";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/PostListContext";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
