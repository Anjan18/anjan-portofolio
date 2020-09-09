import React, { memo } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import NAVIGATION_ITEMS from 'components/navigation_items/navigation_items'

const navigation_variants = {
	initial: { x: 100 },
	animate: {
		x: 0,
	},
	exit: {
		color: 'green',
	},
}

const CONTAINER = styled(motion.nav)`
	background: #010188bf;
	z-index: 4;
	place-items: center;
	position: absolute;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-rows: repeat(5, 1fr);
`

const NAVIGATION_BAR = () => {
	return (
		<CONTAINER
			variants={navigation_variants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<NAVIGATION_ITEMS />
		</CONTAINER>
	)
}

export default NAVIGATION_BAR

// export default memo(NAVIGATION_BAR)
