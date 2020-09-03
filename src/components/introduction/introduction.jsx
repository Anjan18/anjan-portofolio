import React from 'react'
import styled from 'styled-components'

let left_padding = `8%`

const INTROS = styled.div`
	position: absolute;
	width: 100vw;
	// padding-left: 2rem;
	color: white;
	z-index: 3;
	top: 65vh;
	text-transform: uppercase;
	background: #28282887;
	display: grid;
	align-items: center;

	& h1 {
		font-size: 2.5rem;
		padding-left: ${left_padding};
		padding-top: 5%;
	}

	& h2 {
		font-size: 1.5rem;
		padding-top: 5%;
		padding-left: ${left_padding};
	}

	@media (min-width: 600px) {
		& h1 {
			font-size: 3rem;
		}

		& h2 {
			font-size: 2rem;
		}
	}

	@media (min-width: 900px) {
		& h1 {
			font-size: 3.5rem;
		}
		& h2 {
			font-size: 3rem;
		}
	}

	@media (min-width: 1200px) {
		& h1 {
			font-size: 4rem;
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
