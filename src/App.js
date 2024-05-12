import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpLogin from './pages/SignUpLogin'

export default function App() {
    const pages = [
        { text: 'SignUpLogin', link: '/', component: <SignUpLogin /> },
    ]

    return (
        <BrowserRouter>
            <Routes>
                {pages.map((page) => (
                    <Route
                        key={page.text}
                        path={page.link}
                        element={page.component}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

