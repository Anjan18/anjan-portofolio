import { useState } from 'react'

const VARIABLE = () => {
	const [state, setState] = useState(window.innerWidth)
	return [state, setState]
}

export default VARIABLE
