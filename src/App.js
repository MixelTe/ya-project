import './App.css';
import Layout from "./components/Layout"
import MainPage from "./pages/MainPage"
import ProjectsPage from "./pages/ProjectsPage"
import NotFoundPage from "./pages/NotFoundPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App()
{
	return <BrowserRouter>
		<Layout>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Layout>
	</BrowserRouter>
}

export default App;
