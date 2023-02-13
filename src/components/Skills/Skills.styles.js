import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: rgba(9, 26, 47, 0.92);
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const SkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		color: #fff;
		font-size: 80px;
		border-bottom: 5px solid palevioletred;
		margin-bottom: 2rem;
		text-align: center;
	}

	img {
		height: 100px;
		width: 100px;
		margin: 0 20px;
	}

    @media screen and (max-width: 950px) {
        h1 {
            font-size: 40px;
        }

        img {
            height: 60px;
            width: 60px;
            margin: 5px;
        }
    }
`;

export const LearningContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    margin-top: 3rem;

	h2 {
		color: #fff;
		font-size: 48px;
		border-bottom: 5px solid palevioletred;
        margin: 20px;
		text-align: center;
	}

    
	img {
		height: 80px;
		width: 80px;
		margin: 0 20px;
	}

    @media screen and (max-width: 768px) {
        h2 {
            font-size: 30px;
        }

        img {
            height: 50px;
            width: 50px;
            margin: 0 10px;
        }
    }
`;
