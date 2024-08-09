import React from 'react'
import textData from '../data/TextData.json'
import Loading from './Loading'

export default function Home() {
	const [text, setText] = React.useState<string[]>([])
	const [typedText, setTypedText] = React.useState<string>('')

	const [loading, setLoading] = React.useState(true)

	const randomNumber = Math.floor(Math.random() * textData.length)
	const getText = textData[randomNumber]
	const textSplit: string[] = getText.text.split('')

	React.useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setText(textSplit)
			setLoading(false)
		}, 1000)
	}, [])

	React.useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			const isLetterOrSpace = /^[a-zA-Z ]$/.test(e.key)

			if (!loading && isLetterOrSpace) {
				setTypedText(prev => prev + e.key)
			}
		}

		window.addEventListener('keydown', handleKeydown)
		return () => {
			window.removeEventListener('keydown', handleKeydown)
		}
	}, [loading, textSplit, typedText])

	return (
		<div className='flex h-screen justify-center items-center'>
			{loading ? (
				<Loading />
			) : (
				<div>
					<h3 className='m-16 text-justify'>
						{text.map((char, index) => (
							<span
								key={index}
								className={`text-3xl font-bold ${
									index < typedText.length
										? typedText[index] === char
											? 'text-green-700'
											: 'text-red-600'
										: index === typedText.length
										? 'border-b-2 border-green-500'
										: ''
								} ${index === typedText.length ? 'animate-pulse' : ''}`}
							>
								{char}
							</span>
						))}
					</h3>
				</div>
			)}
		</div>
	)
}
