import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	background-color: rgba(9, 26, 47, 0.88);

	form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		max-width: 600px;
		width: 100%;

		div {
			margin-bottom: 20px;

			p {
				/* background-color: red; */
				font-size: 40px;
				font-weight: 800;
				color: #fff;
				display: inline;
				border-bottom: 4px solid palevioletred;
			}
		}

		input {
			padding: 15px 20px 15px 10px;
			margin: 10px 0;
			width: 100%;
		}

		input:focus,
		textarea:focus {
			outline: none;
		}

		textarea {
			padding: 15px 20px 15px 10px;
			width: 100%;
			margin-top: 10px;
		}

		button {
			margin-top: 20px;
			width: 50%;
			padding: 1rem 2rem;
			background: transparent;
			border: 2px solid palevioletred;
			color: #fff;
			font-size: 30px;
			transition: all 0.3s ease-in-out;
			cursor: pointer;

			&:hover {
				background-color: palevioletred;
			}
		}
	}
`;

export const Socials = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	a {
		text-decoration: none;
		color: #fff;
		margin: 2rem 1rem 0;
		font-size: 60px;
	}
`
