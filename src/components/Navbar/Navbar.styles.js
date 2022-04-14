import styled from 'styled-components/macro';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	padding: 0 1rem;
	height: 80px;
	width: 100vw;
	background-color: #09162a;
	color: white;
	z-index: 10;
`;

export const Logo = styled.div`
	color: white;
	margin-left: 10px;
	font-size: 40px;
`;

export const List = styled.ul`
	display: flex;

	li {
		padding: 1rem 2rem;
		border-bottom: 1px solid #fff;
		margin: 1rem;
		transition: all 0.3s ease-in-out;

		&:hover {
			transform: translateY(5px);
			color: palevioletred;
			border-color: palevioletred;
		}
	}

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

export const MobileMenu = styled.ul`
	display: none;

	@media screen and (max-width: 900px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 25%;
		width: 100%;
		height: 100vh;
		background-color: #000;
		z-index: 9;

		li {
			padding: 3rem;
			margin: 5px;
			width: 300px;
			font-size: 25px;
			border-bottom: 1px solid #fff;
		}
	}
`;

export const HamburgerMenu = styled.div`
	display: none;

	@media screen and (max-width: 900px) {
		display: flex;
		margin-right: 10px;
		font-size: 50px;
		z-index: 100;
	}
`;

export const Socials = styled.div`
	display: flex;
	position: fixed;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	height: 50px;
	width: 50px;

	ul {
		display: flex;
		flex-direction: column;

		li {
			width: 160px;
			height: 200px;
			background-color: palevioletred;
			transform: translateX(-70%);
			transition: all 0.3s ease-in-out;

			&:hover {
				transform: translateX(0);
			}
		}

		li:not(:first-child) {
			margin-top: 2px;
		}

		a {
			display: flex;
			justify-content: space-between;
			color: #fff;
			text-decoration: none;
			font-size: 20px;
			font-weight: 500;
			padding: 1rem 0;

			p {
				margin-left: 5px;
			}

			svg {
				margin-right: 10px;
			}
		}
	}

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;
