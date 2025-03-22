import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from '@/layout.tsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import BookPage from 'pages/client/book.tsx'
import AboutPage from 'pages/client/about.tsx'
import LoginPage from 'pages/client/auth/login.tsx'
import RegisterPage from 'pages/client/auth/register.tsx'

import './styles/global.scss'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/book",
                element: <BookPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>
    }, 
    {
        path: "/register",
        element: <RegisterPage/>
    }
]);

// relative path vs absolute path

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </StrictMode>,
)
