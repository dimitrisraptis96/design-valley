import { Button as SemanticButton } from "semantic-ui-react";

const Button = styled(SemanticButton)`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;

  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    background 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;

  padding: 12px 0;
  font-size: 14px;
  font-family: Rubik, "sans-serif";

  &:hover {
    background-color: #cacbcd;
    background-image: none;
    box-shadow: 0 0 0 1px transparent inset,
      0 0 0 0 rgba(34, 36, 38, 0.15) inset;
    color: rgba(0, 0, 0, 0.8);
  }
`;
export default Button;
