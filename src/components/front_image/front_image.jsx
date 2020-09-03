import React from 'react'
import styled from 'styled-components'

import swift from 'assets/front.png'

const CONTAINER = styled.div`
	height: 100vh;
	width: 100vw;
`

const IMAGE = styled.img`
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;

	@media (min-height: 800px), @media (min-width: 400px) {
		width: 150vw;
		left: -23%;
	}

	@media (max-width: 600px) {
		width: 130vw;
		left: -15vw;
	}

	@media (min-width: 600px) {
		width: 110vw;
		left: -5vw;
	}

	@media (min-width: 700px) {
		width: 100vw;
		left: 0;
	}

	@media (min-width: 800px) {
		width: 80vw;
		left: 10vw;
	}

	@media (min-width: 1100px) {
		width: 70vw;
		left: 40vw;
	}

	@media (min-width: 1600px) {
		width: 60vw;
		left: 50vw;
	}

	@media (min-width: 1900px) {
		width: 50vw;
	}
`

export const OVERLAY = styled.div`
	content: '';
	height: 100vh;
	width: 100vw;
	background: black;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	display: block;
	opacity: 0.8;
`

const FRONT_IMAGE = ({ window_state }) => {
	return (
		<CONTAINER>
			<IMAGE src={swift} />
			{window_state ? <OVERLAY /> : null}
		</CONTAINER>
	)
}

export default React.memo(FRONT_IMAGE)
