import React, { useState, memo } from 'react'
import styled from 'styled-components'
import id from 'shortid'

const TITLE = styled.h2``

const CONTAINER = styled.div``

const PROJECT_IMAGE = styled.img``

const PROJECT_TITLE = styled.h4``

const data = [
	{
		title: 'cules tv',
		image: 'assets/front.png',
	},

	{
		title: 'super tv',
		image: 'assets/front.png',
	},

	{
		title: 'porn tv',
		image: 'assets/front.png',
	},
	{
		title: 'comedy tv',
		image: 'assets/front.png',
	},
]

const BUTTON = styled.button``

const WORK = () => {
	const [work_state, set_work_state] = useState(0)

	return (
		<div>
			{React.createElement('div', null, 'shit')}
			<TITLE> I have one </TITLE>
			{data.map((item, index) => {
				if (index === work_state) {
					return (
						<CONTAINER
							key={id.generate()}
						>
							{' '}
							<PROJECT_IMAGE
								src={item.image}
							/>{' '}
							<PROJECT_TITLE
								children={
									item.title
								}
							/>{' '}
						</CONTAINER>
					)
				}
			})}

			<button
				onClick={() => {
					if (work_state <= 0) {
						console.log(work_state)
						return set_work_state(
							data.length 
						)
					} else {
						set_work_state(work_state - 1)
						console.log(work_state)
					}
				}}
			>
				previous
			</button>
			<button
				onClick={() => {
					if (work_state >= data.length) {
						console.log(work_state)
						return set_work_state(0)
					} else {
						set_work_state(work_state + 1)
					}
				}}
			>
				next
			</button>
		</div>
	)
}

export default WORK
