import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function HomeScreen() {
  return <h1>home</h1>;
}

function ProfileScreen() {
  return <h1>profile</h1>;
}

function ShopScreen() {
  throw new Error("something went wrong in shop");
}

function App() {

  // exercise 4
  const postData = async () => {
    const url = 'https://webhook.site/aaa4449d-f91b-4a37-a15b-05e65e1fbdc6'

    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      console.log("Response:", response);

    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  return (
    <>
      <BrowserRouter>
        <h2>Exercise 1 : React Router Error Boundary</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <NavLink to="/" className="nav-link bg-primary p-2 m-2 rounded-2">Home</NavLink>
          <NavLink to="/profile" className="nav-link bg-primary p-2 m-2 rounded-2">Profile</NavLink>
          <NavLink to="/shop" className="nav-link bg-primary p-2 m-2 rounded-2">Shop</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
          <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
          <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
        </Routes>
      </BrowserRouter>

      <hr />
      <h2 className="pb-2">Exercise 2 : Display JSON Data in React JS</h2>
      <PostList />

      <hr />
      <h2>Exercise 3 : Display JSON Data and parse it</h2>
      <Example1 />
      <Example2 />
      <Example3 />

      <hr />
      <h2>Exercise 4 : Post JSON Data with React JS</h2>
      <div>
        <button onClick={postData}>Press me to post some data</button>
      </div>
    </>
  );
}

export default App;
