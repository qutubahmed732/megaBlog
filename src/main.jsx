import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux-store/store.js';
import Random from './pages/Random.jsx'

import { Home, ProtectedLayer, Login, Signup, AllPosts, Addpost, Editpost, Post } from "./Interface/index.js"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <ProtectedLayer authentication={false}>
            <Login />
          </ProtectedLayer>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedLayer authentication={false}>
            <Signup />
          </ProtectedLayer>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <ProtectedLayer authentication>
            {" "}
            <AllPosts />
          </ProtectedLayer>
        ),
      },
      {
        path: "/add-post",
        element: (
          <ProtectedLayer authentication>
            {" "}
            <Addpost />
          </ProtectedLayer>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <ProtectedLayer authentication>
            {" "}
            <Editpost />
          </ProtectedLayer>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      }
    ],
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <RouterProvider router={router} />
      {/* {RouterProvider({router})} */}
    </Provider>

  </StrictMode>
)
