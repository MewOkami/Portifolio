import {
  TypographyTexts,
  TypographySubtitles,
  TypographySubtitlesForLink,
} from "../../styles/Typograph";
import { HeaderStyle } from "./style";
import { Link } from "react-scroll";

export const Header = () => {
  let logo = "< Melissa />";

  return (
    <HeaderStyle>
      <div className="HeaderStyle__conteiner">
        <div>
          <TypographyTexts>{logo}</TypographyTexts>
        </div>
        <div className="HeaderStyle__conteiner--links">
          <TypographySubtitlesForLink className="HeaderStyle__conteiner--link">
            <Link to="about" smooth={true} offset={0} duration={500}>
              About
            </Link>
          </TypographySubtitlesForLink>
          <TypographySubtitlesForLink className="HeaderStyle__conteiner--link">
            <Link to="tools" smooth={true} offset={0} duration={500}>
              Tools
            </Link>
          </TypographySubtitlesForLink>
          <TypographySubtitlesForLink className="HeaderStyle__conteiner--link">
            <Link to="projects" smooth={true} offset={10} duration={500}>
              Projects
            </Link>
          </TypographySubtitlesForLink>
          <TypographySubtitlesForLink className="HeaderStyle__conteiner--link">
            <Link to="contacts" smooth={true} offset={10} duration={500}>
              Contacts
            </Link>
          </TypographySubtitlesForLink>
          <TypographySubtitlesForLink className="HeaderStyle__conteiner--link">
            <Link to="footer" smooth={true} offset={10} duration={500}>
              Footer
            </Link>
          </TypographySubtitlesForLink>
        </div>
      </div>
    </HeaderStyle>
  );
};
