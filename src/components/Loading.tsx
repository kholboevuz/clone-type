import { FaSpinner } from 'react-icons/fa'
export default function Loading() {
	return (
		<div>
			<FaSpinner className='animate-spin flex justify-center items-center text-4xl ' />
		</div>
	)
}
