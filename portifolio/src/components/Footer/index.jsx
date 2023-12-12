import perfil from "../../assets/116081185.jpg";
import {
  TypographySubtitles,
  TypographySubtitlesForLink,
  TypographyTitles,
} from "../../styles/Typograph";
import { FooterStyle } from "./style";

export const Footer = () => {
  return (
    <FooterStyle id="footer">
      <div className="FooterStyle__container">
        <div className="FooterStyle__container--divImage">
          <img className="FooterStyle__container--image" src={perfil} alt="" />
          <div className="FooterStyle__container--divtexts">
            <TypographyTitles>Obrigada!</TypographyTitles>
            <TypographySubtitles>
              Não esquece de dar uma olhadinha nas minhas redes ;]
            </TypographySubtitles>
          </div>
        </div>
        <div className="FooterStyle__container--divCreator">
          <TypographySubtitles>Originalmente criado por:</TypographySubtitles>
          <TypographySubtitlesForLink
            className="FooterStyle__container--divCreatorLink"
            target="blank"
            href="https://www.linkedin.com/in/melissa-sequeira-967187211/"
          >
            Melissa Sequeira
          </TypographySubtitlesForLink>
        </div>
      </div>
    </FooterStyle>
  );
};
