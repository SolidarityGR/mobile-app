import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpLogin from './pages/SignUpLogin'

import CategorySelection from './pages/CategorySelection'
import ItemSelection from './pages/ItemSelection'


import CategorySubmission from './pages/CategorySubmission'
import ItemSubmission from './pages/ItemSubmission'

export default function App() {
    const pages = [
        { text: 'SignUpLogin', link: '/', component: <SignUpLogin /> },
        { text: 'CategorySelect', link: '/category/select', component: <CategorySelection /> },
        { text: 'ItemSelection', link: '/category/select/:type', component: <ItemSelection /> },
        { text: 'CategorySubmit', link: '/category/submit', component: <CategorySubmission /> },
        { text: 'ItemSubmission', link: '/category/submit/:type', component: <ItemSubmission /> },
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

