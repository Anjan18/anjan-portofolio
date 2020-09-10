import React from 'react'
import styled from 'styled-components'

let common = `height: 100vh; `

const CONTAINER = styled.div`
	height: 100vh;
	width: 100vw;
	grid-template-columns: 60% 40%;
	position: absolute;
	top: 0;
	left: 0;

	@media (min-width: 1600px) {
		display: grid;
	}
`

const BRIGHT = styled.div`
	background: blue;
`

const DARK = styled.div`
	background: #292929;
`

const BACKGROUND = () => {
	return (
		<CONTAINER>
			<BRIGHT />
			<DARK />
		</CONTAINER>
	)
}

export default BACKGROUND
