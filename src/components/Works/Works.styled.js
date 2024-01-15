import styled from "styled-components";

export const WorkWrapper = styled.div`
display: flex;
justify-content: space-between;
position: relative;
margin-top: 130px;
background-image: url('/images/doodleWorks.png'); 
backround-repeat: repeat;
padding: 268px 96px;
justify-content: center;
`
export const ProjectCard = styled.div`
border-radius: 16px;
background: rgba(57, 62, 70, 0.50);
display: flex;
padding: 61px 52px 61px 51px;
justify-content: center;
align-items: center
backdrop-filter: blur(2px);
width: 170px;
height: 170px;
`
export const TagsWrapper = styled.div`
display: flex;
align-items: flex-end;
gap: 16px;
`

export const Tag = styled.div`
border-radius: 24px;
background: rgba(57, 62, 70, 0.50);

backdrop-filter: blur(4px);
display: flex;
padding: 10px 32px;
align-items: flex-start;
gap: 10px;
`

export const ProductsCards = styled.div`
display: flex;
align-items: center;
gap: 48px;
`