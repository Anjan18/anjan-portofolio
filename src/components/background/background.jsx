import React from "react"
import styled from "styled-components"

let common = `height: 100vh; `

const CONTAINER = styled.div`
	${common}
	max-width: 100vw;
	display: grid;
	// grid-template-columns: 60% 40%;
	grid-template-columns: 1fr;
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
