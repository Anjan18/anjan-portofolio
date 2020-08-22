import React from 'react'
import styled from 'styled-components'

let left_padding = `8%`

const INTROS = styled.div`
	position: absolute;

	width: 100vw;
	// padding-left: 2rem;
	color: white;
	z-index: 3;
	top: 55vh;
	text-transform: uppercase;
	background: #06050599;
	display: grid;
	align-items: center;
	& h1 {
		font-size: 3rem;
		padding-left: ${left_padding};
		padding-top: 5%;
	}

	& h2 {
		font-size: 1.7rem;
		padding-top: 5%;
		padding-left: ${left_padding};
	}

	@media (max-width: 450px) {
		top: 60vh;
		padding: 5% 0;

		h2 {
		}
	}
`

const INTRODUCTION = () => {
	return (
		<INTROS>
			<h1>
				hello,
				<br /> I am
				<br /> taylor swift
			</h1>
			<h2>i will make website for you</h2>
		</INTROS>
	)
}

export default INTRODUCTION
