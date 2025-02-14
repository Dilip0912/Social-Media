import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from './components/PostList.jsx'
import CreatePost from './components/CreatePost.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {path:"/",element:<PostList/>},
    {path:"/Create-Post",element:<CreatePost/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
