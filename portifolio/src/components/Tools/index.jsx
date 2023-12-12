import { ToolsStyle } from "./style";
import javascript from "../../assets/javascript.png";
import typescript from "../../assets/typescript.png";
import nest from "../../assets/nest.png";
import node from "../../assets/node.png";
import python from "../../assets/python.png";
import django from "../../assets/django.png";
import react from "../../assets/react.png";
import styledcomponents from "../../assets/styledcomponents.png";
import sql from "../../assets/sql.png";
import { TypographyTitles } from "../../styles/Typograph";

export const Tools = () => {
  return (
    <ToolsStyle id="tools">
      <div className="ToolsStyle__containerTitle">
        <TypographyTitles>Ferramentas que domino</TypographyTitles>
      </div>
      <div className="ToolsStyle__container">
        <div className="ToolsStyle__container--divImg">
          <img
            className="ToolsStyle__container--image"
            src={javascript}
            alt=""
          />
        </div>
        <div className="ToolsStyle__container--divImg">
          <img
            className="ToolsStyle__container--image"
            src={typescript}
            alt=""
          />
        </div>
        <div className="ToolsStyle__container--divImg">
          <img className="ToolsStyle__container--image" src={nest} alt="" />
        </div>
        <div className="ToolsStyle__container--divImg">
          <img className="ToolsStyle__container--image" src={node} alt="" />
        </div>
        <div className="ToolsStyle__container--divImg">
          <img className="ToolsStyle__container--image" src={python} alt="" />
        </div>
        <div className="ToolsStyle__container--divImg">
          <img className="ToolsStyle__container--image" src={django} alt="" />
        </div>
        <div className="ToolsStyle__container--divImg">
          <img className="ToolsStyle__container--image" src={react} alt="" />
        </div>
        <div className="ToolsStyle__container--divImg">
          <img
            className="ToolsStyle__container--image"
            src={styledcomponents}
            alt=""
          />
        </div>
        <div className="ToolsStyle__container--divImg">
          <img className="ToolsStyle__container--image" src={sql} alt="" />
        </div>
      </div>
    </ToolsStyle>
  );
};
