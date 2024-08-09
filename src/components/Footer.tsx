export default function Footer() {
	return (
		<div className='flex justify-center  items-center h-16 fixed mb-3 bottom-0 w-full'>
			<div>
				<h1 className='text-center text-lg font-bold text-white'>
					Kholboevdev {new Date().getFullYear()}
				</h1>
			</div>
		</div>
	)
}
