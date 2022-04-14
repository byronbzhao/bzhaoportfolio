import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: rgba(10, 25, 47, 0.95);
	color: #fff;
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	max-width: 800px;
	width: 100%;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const LeftSide = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column;
	width: 100%;

	h1 {
		font-size: 80px;
		border-bottom: 5px solid palevioletred;
	}

	p {
		margin-top: 20px;
		text-align: end;
		line-height: 1.4;
	}

	div {
		width: 100%;

		@media screen and (max-width: 768px) {
			flex-direction: column;
			margin: 0 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			h1 {
				margin: 0 2rem 0 10rem;
				font-size: 60px;
				text-align: right;
			}

			p {
				text-align: right;
				padding-right: 0;
			}
		}
	}
`;

export const RightSide = styled.div`
	width: 60%;
	flex: 1;
	line-height: 2;

	p {
		font-size: 18px;
	}

	button {
		outline: none;
		background: transparent;
		padding: 1rem 2rem;
		border: 2px solid palevioletred;
		font-size: 30px;
		margin-top: 10px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;

		a {
			text-decoration: none;
			color: #fff;
		}

		&:hover {
			background-color: palevioletred;
			border: 2px solid rgba(10, 25, 47, 0.95);
		}
	}
	@media screen and (max-width: 768px) {
		text-align: center;
		width: 100%;
		padding: 1rem;
	}
`;

export const Divider = styled.div`
	height: 500px;
	width: 2px;
	background-color: #fff;
	margin: 0 20px;

	@media screen and (max-width: 768px) {
		height: 2px;
		width: 90%;
		margin: 20px 0;
	}
`;
