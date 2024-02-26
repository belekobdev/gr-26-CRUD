import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddProduct from './components/AddProduct/index'
import EditProduct from './components/EditProduct'
import Header from './components/Header/index'
import ReadProduct from './components/ReadProduct/index'

function App() {
	const [data, setData] = useState([])
	const [editInput, setEditInput] = useState({})
	function readProduct() {
		let newData = JSON.parse(localStorage.getItem('todo')) || []
		setData(newData)
	}
	function deleteProduct(id) {
		let newData = JSON.parse(localStorage.getItem('todo')) || []
		newData = newData.filter(el => {
			return el.id !== id
		})
		localStorage.setItem('todo', JSON.stringify(newData))
		readProduct()
	}

	function editProduct(index) {
		setEditInput(data[index])
	}

	function handleSaveProduct(newProduct) {
		let data = JSON.parse(localStorage.getItem('todo')) || []
		if (
			newProduct.image === '' ||
			newProduct.name === '' ||
			newProduct.price === ''
		) {
			alert('Заполните полю!!!')
		} else {
			data = data.map(el => {
				if (newProduct.id === el.id) {
					return newProduct
				} else {
					return el
				}
			})
			localStorage.setItem('todo', JSON.stringify(data))
		}
	}


	
	
	return (
		<div className='App'>
			<Header data={data} />
			<Routes>
				<Route
					path='/'
					element={<AddProduct readProduct={readProduct} data={data} />}
				/>
				<Route
					path='/readProduct'
					element={
						<ReadProduct
							readProduct={readProduct}
							data={data}
							deleteProduct={deleteProduct}
							editProduct={editProduct}
						/>
					}
				/>
				<Route
					path='/edit/:id'
					element={
						<EditProduct
							editInput={editInput}
							handleSaveProduct={handleSaveProduct}
							readProduct={readProduct}
							data={data}
						/>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
