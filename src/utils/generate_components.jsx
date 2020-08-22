import React from 'react'

const GENERATE_COMPONENTS = () => {
	for (let i = 0; i < 4; i++) {
		return React.createElement('h2', null, i)
	}
}

export default GENERATE_COMPONENTS
