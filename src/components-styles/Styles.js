import styled, { createGlobalStyle } from "styled-components"

export const Button = styled.div`
   font-family:Recursive;
   width: 85.17px;
   height:37.17px;
   border-radius:5px;
   display:flex;
   text-align:center;
   justify-content:center;
   align-items:center;
   word-break: break-word;
   color:white;
   font-size:12px;

`


export const Card = styled.div`
${(props) => props.color ? `text-decoration: line-through; color: ${props.color}` : "color:black"};
position:relative;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
width:300px;
height:65px;
background-color:white;
margin-top: 40px;
display:flex;
align-items:center;
padding: 0 10px;
border-radius: 5px;
box-shadow: 0 5px rgb(0,0,0,0.125);
p{
    display:flex;
    
}
p img{
    position: absolute;
    right:10px;
}
`

export const Resposta = styled.div`
font-family: Recursive;
word-break:break-all;
background:#FFFFD4;
position:relative;
width:300px;
    height: 131px;
    margin-top:40px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 10px;
img{
    position:absolute;
    bottom:0;
    right:10px
}
.botoes{
 justify-content:space-between;
 margin-top:10px
}
h1{
    font-size:18px;
}
`

export const Header = styled.div`
display:flex;
justify-content:center;
align-items:center;
h1{
    /*titulo zapp Recall*/
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: white;
    margin-left: 30px;
  
}
margin-top:30px;
`

export const GameBody = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-direction :column;
   justify-content :center;
   align-items:center;
   margin-bottom:80px;
`;

export const Container = styled.div`
width:"100%"; 
display:"flex";
flex-direction:column;

`
export const Footer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height:70px;
    background: #ffff;
    margin-top:20px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    position:fixed;
    bottom:0;
`

export const Resetcss = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
    box-sizing:border-box;
    background:#FB6B6B;
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

` 
