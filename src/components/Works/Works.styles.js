import styled from 'styled-components';

export const Wrapper = styled.div`
	/* height: 100vh; */
	width: 100%;
	background-color: rgba(9, 26, 47, 0.9);
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	width: 100%;

	h1:first-child {
		margin-bottom: 25px;
		color: #fff;
		border-bottom: 5px solid palevioletred;
		font-size: 40px;
		padding-top: 5rem;
	}
`;

export const WorkContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	@media screen and (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 900px) {
        width: 95%;
		display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
	}   
`;
