import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProduct = ({ editInput, handleSaveProduct, readProduct, data }) => {
	const [product, setProduct] = useState(editInput)

	function inputChangeImage(e) {
		let newObj = { ...product }
		newObj.image = e.target.value
		setProduct(newObj)
	}

	function inputChangeName(e) {
		let newObj = { ...product }
		newObj.name = e.target.value
		setProduct(newObj)
	}
	function inputChangePrice(e) {
		let newObj = { ...product }
		newObj.price = e.target.value
		setProduct(newObj)
	}
	useEffect(() => {
		readProduct()
	}, [data])
	const navigate = useNavigate()
	return (
		<div className='flex  bg-[black]   items-center justify-center h-[100vh]'>
			<div
				style={{
					border: '2px solid grey',
				}}
				className='rounded-[20px] bg-[#181818] flex items-center flex-col justify-center  w-[500px] h-[500px] '
			>
				<div>
					<h2 className='pb-[40px] text-[white] text-[34px] font-[600]'>
						EDIT
					</h2>
				</div>
				<div class='max-w-xs z-[99]   mx-auto'>
					<div class='relative '>
						<span class='absolute start-0 bottom-3 text-gray-500 dark:text-gray-400'></span>
						<input
							value={product.image}
							onChange={inputChangeImage}
							type='text'
							id='floating-phone-number'
							class='block w-[300px] text-[white] py-2.5 ps-6 pe-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							placeholder=' '
						/>
						<label
							for='floating-phone-number'
							class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
						>
							Image...
						</label>
					</div>
					<div class='relative my-[30px]'>
						<span class='absolute start-0 bottom-3 text-gray-500 dark:text-gray-400'></span>
						<input
							value={product.name}
							onChange={inputChangeName}
							type='text'
							id='floating-phone-number'
							class='block w-[300px] text-[white] py-2.5 ps-6 pe-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							placeholder=' '
						/>
						<label
							for='floating-phone-number'
							class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
						>
							AddProduct...
						</label>
					</div>
					<div class='relative'>
						<span class='absolute start-0 bottom-3 text-gray-500 dark:text-gray-400'></span>
						<input
							value={product.price}
							onChange={inputChangePrice}
							type='text'
							id='floating-phone-number'
							class='block py-2.5 ps-6 text-[white] pe-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							placeholder=' '
						/>
						<label
							for='floating-phone-number'
							class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
						>
							Price...
						</label>
					</div>
					<div className='ml-[80px] mt-[40px]'>
						<button
							onClick={() => {
								handleSaveProduct(product)
								navigate(`/readProduct`)
							}}
							class='relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 mr-[60px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
						>
							<span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
								Save Product
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditProduct
