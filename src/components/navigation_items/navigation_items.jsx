import React from 'react'
import styled from 'styled-components'
import short_id from 'shortid'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const variants = {
	initial: {
		fontSize: '2rem',
	},
	hover: {
		fontSize: '3rem',
		// color: '#fff',
		color: 'brown',
	},
}

const ITEMS = styled(NavLink)`
	color: white;
`

// const nav_items = ['home', 'work', 3, 4, 5]
const nav_items = [
	{ name: 'home', path: '/' },
	{ name: 'work', path: '/work' },
	{ name: 'services', path: '/services' },
	{ name: 'about me', path: '/about_me' },
]

const NAVIGATION_ITEMS = () => {
	return (
		<>
			{nav_items.map((item) => {
				return (
					<motion.span
						variants={variants}
						whileHover="hover"
					>
						<ITEMS
							to={item.path}
							children={item.name}
							key={short_id.generate()}
						/>
					</motion.span>
				)
			})}
		</>
	)
}

export default NAVIGATION_ITEMS
