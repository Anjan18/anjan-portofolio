import React from 'react'
import styled from 'styled-components'

import swift from 'assets/front.png'

const CONTAINER = styled.div`
	height: 100vh;
	width: 100vw;
`

const IMAGE = styled.img`
	@media (max-width: 450px) {
		height: 100vh;
		max-width: 100vw;
		position: absolute;
		top: 0;
		transform: scale(1.5, 1);
		background: #876245;
	}
	background: none;

	@media (max-width: 600px) {
		left: -5;
	}

	@media (max-width: 768px) {
		left: -5;
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
