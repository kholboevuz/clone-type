import { ModeToggle } from './mode-toggle'
import { Avatar, AvatarFallback } from './ui/avatar'

export default function Header() {
	return (
		<div>
			<div className='flex items-center justify-between h-16 px-4 fixed bg-gray-800   top-0 left-0 right-0 z-10 mt-3'>
				<div className=''>
					<h1 className='text-white text-2xl font-bold dark:text-white'>
						{' '}
						Monkeytype
					</h1>
				</div>
				<div className='flex items-center gap-4'>
					<ModeToggle />
					<Avatar>
						<AvatarFallback>SX</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</div>
	)
}
