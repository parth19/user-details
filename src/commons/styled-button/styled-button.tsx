import styled from 'styled-components';
import { colors } from '../../constants';
interface statusProps {
    backgroundColor?: string;
  }

const StyledButton = styled.button<statusProps>`
flex: 1;
background: ${props => props.backgroundColor? props.backgroundColor : colors.nextButton};
color: white;
font-size: 1.3em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #2B45D4;
border-color: ${props => props.backgroundColor? props.backgroundColor : colors.nextButton};
border-radius: 3px;
width: 230px;
height: 55px;
`;
export default StyledButton;