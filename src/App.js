import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'
import SignUpLogin from './pages/SignUpLogin'

export default function App() {
    const pages = [
        { text: 'SignUpLogin', link: '/', component: <SignUpLogin /> },
    ]

    return (
        <Routes>
            {pages.map((page) => (
                <Route
                    key={page.text}
                    path={page.link}
                    element={page.component}
                />
            ))}
        </Routes>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
