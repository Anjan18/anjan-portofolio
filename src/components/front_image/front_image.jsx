import React from 'react'
import styled from 'styled-components'

import swift from 'assets/front.png'

const CONTAINER = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	display: grid;
	place-items: center;

	@media (min-width: 700px) {
		place-items: end;
	}
`

const IMAGE = styled.img`
	width: 50rem;
	position: relative;
	top: 10vh;

	@media (max-width: 450px) {
		display: block;
		margin: 0 auto 0 auto;
		width: 100%;
	}

	@media (max-width: 360px) {
		// display: block;
		// margin: 0 auto 0 auto;
		width: 120%;
		margin-left: -5%;
	}

	@media (max-width: 1500px) {
		top: 0;
	}

	@media (max-width: 700px) {
	}
`

export const OVERLAY = styled.div`
	content: '';
	height: 100vh;
	width: 100vw;
	// background: black;
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
