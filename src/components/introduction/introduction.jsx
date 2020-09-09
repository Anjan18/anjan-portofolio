import React from 'react'
import styled from 'styled-components'

let left_padding = `8%`
const INTRO_WRAPPER = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 2;
	display: grid;
	align-items: end;
`
const INTROS = styled.div`
	margin-bottom: 20vh;
	padding: 1vh 0;
	padding-left: 10vw;
	color: white;
	background: #17171787;

	& h1 {
		fontsize: 3vw;
	}

	& h2 {
	}
`

const INTRODUCTION = () => {
	return (
		<INTRO_WRAPPER>
			<INTROS>
				<h1>
					hello,
					<br /> I am
					<br /> taylor swift
				</h1>
				<h2>i will make website for you</h2>
			</INTROS>
		</INTRO_WRAPPER>
	)
}

export default INTRODUCTION
