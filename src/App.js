import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import PageSignin from './pages/signin';
import DashboardPage from './pages/dashboard';
import CategoriesPage from './pages/categories';
import CategoriesCreate from './pages/categories/create.js';
import CategoriesEdit from './pages/categories/edit.js';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<DashboardPage />} />
					<Route path='/signin' element={<PageSignin />} />
					<Route path='/categories' element={<CategoriesPage />} />
					<Route path='/categories/create' element={<CategoriesCreate />} />
					<Route path='/categories/edit/:id' element={<CategoriesEdit />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
