import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10px);
	}
	100% {
		transform: translateY(0);
	}
`

export const Wrapper = styled.div`
	background-color: #0a192f;
	height: 100vh;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	max-width: 1000px;
	height: 100%;
	margin: auto;
	padding: 2rem;

	p:first-child {
		color: rgb(219, 39, 119);
		font-size: 45px;

		@media screen and (max-width: 768px) {
			font-size: 40px;
			margin-top: 10px;
		}
	}

	h1 {
		font-size: 120px;
		color: #fff;
		font-weight: 800;

		span {
			display: inline-block;
			color: rgb(219, 39, 119);
			animation: ${Animation} 1s linear infinite;
		}

		@media screen and (max-width: 768px) {
			font-size: 70px;
		}
	}

	h2 {
		color: #8892b0;
		font-weight: 800;
		font-size: 70px;
	}

	p {
		color: palevioletred;
		font-size: 30px;
	}

`;

export const Button = styled.button`
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	border: 2px solid palevioletred;
	background: transparent;
	color: #fff;
	font-size: 30px;
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	span {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	svg {
		margin-left: 10px;
		transition: all 0.3s ease-in-out;
	}

	&:hover {
		background-color: palevioletred;
		border: 2px solid #0a192f;

		svg {
			transform: rotate(90deg);
		}
	}
	
	@media screen and (max-width: 900px) {
	}
`;

