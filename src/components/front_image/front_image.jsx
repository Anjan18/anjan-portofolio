import React from 'react'
import styled from 'styled-components'
// import SuperQuery from '@themgoncalves/super-query'

import swift from 'assets/front.png'

const CONTAINER = styled.div`
	background: brown;
	height: 100vh;
	width: 100vw;
	position: relative;
	display: grid;
`

const IMAGE = styled.img`
	position: absolute;
	max-width: 100%;
	height: 80%;
	object-fit: cover;
	justify-self: center;
	align-self: end;

	@media (max-height: 450px) {
		justify-self: end;
	}

	@media (min-height: 1800px) {
		height: 70%;
	}
	@media (min-width: 1200px) {
		justify-self: end;
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
