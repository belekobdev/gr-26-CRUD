import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillBasketFill } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ReadProductCar = ({ el, ind, deleteProduct, editProduct }) => {

	return (
		<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
			<th
				scope='row'
				class='px-6  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
			>
				<img
					className='w-[140px] rounded-[20px]'
					src={el.image}
					alt='url is not correct!!!'
				/>
			</th>
			<td class='px-6 py-4'>{el.name}</td>
			<td class='px-6 py-4'>{el.price}$</td>
			<td class='px-6 py-4'>
				<button
					onClick={() => {
						deleteProduct(el.id)
					}}
					type='button'
					class='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
				>
					{' '}
					<AiOutlineDelete />
				</button>
			</td>
			<td class='px-6 py-4'>
				<Link to={`/edit/${el.id}`}>
					<button
						onClick={() => {
							editProduct(ind)
						}}
						type='button'
						class='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
					>
						<MdEdit />
					</button>
				</Link>
			</td>
			
		</tr>
	)
}

export default ReadProductCar
