import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 280px;
	width: 350px;
	margin: 2px;	
	


	@media screen and (max-width: 900px) {
		height: 70%;
		width: 80%;
		/* margin: 10px; */
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	position: relative; 	

	img {
		height: 100%;
		width: 100%;
		max-width: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	@media screen and (max-width: 900px) {
		position: static;
	}

	@media screen and (max-width: 1200px) {
		position: static;
		flex-direction: column;
	}
`;

export const WorkContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	transition: all 0.2s ease-in-out;
	
	h2 {
		color: #fff;
		margin-top: 5px;
		font-size: 40px;
		text-align: center;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;

		a {
			margin: 0 5px;
			text-decoration: none;
			color: #fff;
			border: 1px solid #fff;
			padding: 10px 20px;
			transition: all 0.2s ease-in-out;

			&:hover {
				border-color: palevioletred;
				transform: scale(1.1);
			}
		}
	}

	p {
		margin-bottom: 5px;
		color: #fff;
		font-size: 14px;
		padding: 0 1rem;
	}

	&:hover { 
		opacity: 1;
	}

	@media screen and (max-width: 1000px) {
		position: static;
		opacity: 1;
		margin-bottom: 10px;
		padding-bottom: 10px;
		

		p {
			display: none;
		}
	}
`