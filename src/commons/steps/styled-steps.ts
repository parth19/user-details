import styled from 'styled-components';
interface statusProps {
    backgroundColor?: string;
    isLastElement?: boolean;
  }

const statusStyled = styled.a<statusProps>`
    position: relative;
    color: black;
    display: inline-block;
    font-weight: normal;
    font-size: 3.8em;
    margin-right: 0;
    text-align: center;
    text-transform: uppercase;
    min-width: 200px;
    text-decoration: none;
    :after {
        content: "";
        position: absolute;
        border: ${props => props.isLastElement? "0px" : "2px solid"};
        border-color: ${props => props.backgroundColor};
        width: 120px;
        z-index: -1;
        top: 35%;
        left: 69%;
    }

    span {
        color: white;
        background: ${props => props.backgroundColor};
        display: block;
        height: 85px;
        margin: 0 auto 10px;
        width: 85px;
        border-radius: 50%;
    }
`;
export default statusStyled;