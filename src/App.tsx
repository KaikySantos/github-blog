import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { DefaultLayout } from './layout/Default'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
