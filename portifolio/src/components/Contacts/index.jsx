import linkedin from "../../assets/linkedin.png";
import whats from "../../assets/whats.png";
import email from "../../assets/email.png";
import { ContactsStyle } from "./style";
import {
  TypographySubtitles,
  TypographyTexts,
  TypographyTitles,
} from "../../styles/Typograph";

export const Contacts = () => {
  return (
    <ContactsStyle id="contacts">
      <div className="ContactsStyle__container">
        <div className="ContactsStyle__container--linkedin">
          <TypographyTitles>Eai bora troca uma ideia?</TypographyTitles>
          <div className="ContactsStyle__container--link">
            <TypographySubtitles className="ContactsStyle__container--text">
              Caso tenha interesse, veja mais sobre mim e meus projetos no
            </TypographySubtitles>
            <TypographySubtitles className="ContactsStyle__container--textLinkedin">
              Linkedin
            </TypographySubtitles>
            <TypographySubtitles className="ContactsStyle__container--text">
              :]
            </TypographySubtitles>
          </div>
          <div>
            <a
              className="ContactsStyle__container--linkstyle"
              target="blank"
              href="https://www.linkedin.com/in/melissa-sequeira-967187211/"
            >
              <img src={linkedin} alt="" />
              Linkedin
            </a>
          </div>
        </div>

        <div className="ContactsStyle__containerContact">
          <div className="ContactsStyle__containerContact--div">
            <div className="ContactsStyle__containerContact--divImagewhats">
              <img src={whats} alt="" />
            </div>
            <div className="ContactsStyle__containerContact--divContact">
              <TypographyTitles className="ContactsStyle__containerContact--divContactTitle">
                Meu whats
              </TypographyTitles>
              <TypographySubtitles>
                Caso prefira fique a vontade para me mandar mensagens de texto
                ou de voz
              </TypographySubtitles>
              <TypographyTexts className="ContactsStyle__containerContact--divContactValue">
                (11) 99867-0204
              </TypographyTexts>
            </div>
          </div>
          <div className="ContactsStyle__containerContact--div">
            <div className="ContactsStyle__containerContact--divImageEmail">
              <img src={email} alt="" />
            </div>
            <div className="ContactsStyle__containerContact--divContact">
              <TypographyTitles className="ContactsStyle__containerContact--divContactTitle">
                Meu email
              </TypographyTitles>
              <TypographySubtitles>
                Estou sempre de olho no email então ele é uma otima opção caso
                queira me enviar algo
              </TypographySubtitles>
              <TypographyTexts className="ContactsStyle__containerContact--divContactValue">
                mehsequeiracampos@gmail.com
              </TypographyTexts>
            </div>
          </div>
        </div>
      </div>
    </ContactsStyle>
  );
};
