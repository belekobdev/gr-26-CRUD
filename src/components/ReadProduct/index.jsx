import React, { useEffect } from 'react'
import ReadProductCar from './ReadProductCard'

const ReadProduct = ({ readProduct, data, deleteProduct, editProduct }) => {
	useEffect(() => {
		readProduct()
	}, [])

	return data.length === 0 ? (
		<div className='bg-[#181818] flex justify-center items-center h-[100vh]'>
			<div
				class='flex items-center w-[600px]  p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800'
				role='alert'
			>
				<svg
					class='flex-shrink-0 inline w-4 h-4 me-3'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
				</svg>
				<span class='sr-only'>Info</span>
				<div>
					<span class='font-medium'>Danger alert!</span> Change a few things up
					and try submitting again.
				</div>
			</div>
		</div>
	) : (
		<div className='flex bg-[#181818] h-[100vh] items-center justify-center '>
			<div class='relative w-[900px]  overflow-x-auto shadow-md sm:rounded-lg'>
				<table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
					<thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th scope='col' class='px-6 py-3'>
								Image
							</th>
							<th scope='col' class='px-6 py-3'>
								Product Name
							</th>

							<th scope='col' class='px-6 py-3'>
								Price
							</th>
							<th scope='col' class='px-6 py-3'>
								Actions
							</th>
							<th scope='col' class='px-6 py-3'>
								Edit
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((el, index) => (
							<ReadProductCar
								editProduct={editProduct}
								ind={index}
								el={el}
								deleteProduct={deleteProduct}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ReadProduct
