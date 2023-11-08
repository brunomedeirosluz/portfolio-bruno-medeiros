import Css from '../../Images/css.svg';
import Html from '../../Images/html.svg';
import Js from '../../Images/js.svg';
import React from '../../Images/react.svg';
import Docker from '../../Images/docker.svg';
import Jest from '../../Images/jest.svg';
import Ts from '../../Images/ts.svg';
import MySQL from '../../Images/mysql.svg';
import VsCode from '../../Images/vscode.svg';
import Redux from '../../Images/redux.svg';
import Mocha from "../../Images/mocha.svg";
import NodeJs from "../../Images/nodejs.svg";

import './Stacks.css'

function Stacks() {
  return (
    <section className='stacks'>
      <div className='title-stacks'>
        <span>My Stacks</span>
      </div>
      <div className='sub-title'>
        <span>Tecnologias com as quais tenho trabalhado recentemente </span>
      </div>
      <div>
        <img src={Html} alt="logo css" />
        <img src={Css} alt="logo html" />
        <img src={Js} alt="logo js" />
        <img src={Ts} alt="logo TS" />
        <img src={React} alt="logo react" />
        <img src={Redux} alt="logo jest" />
        <img src={Docker} alt="logo docker" />
        <img src={MySQL} alt="logo mysql" />
        <img src={NodeJs} alt="logo nodejs" />
        <img src={Jest} alt="logo jest" />
        <img src={Mocha} alt='logo mocha' />
        <img src={VsCode} alt="logo vscode" />
      </div>
    </section>
  )
}

export default Stacks;