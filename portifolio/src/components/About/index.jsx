import imagePerfil from "../../assets/116081185.jpg";
import imagemCodigo from "../../assets/imagemCodigo.jpg";
import github from "../../assets/github.png";
import { TypographySubtitles } from "../../styles/Typograph";
import { AboutStyle } from "./style";

export const About = () => {
  return (
    <AboutStyle id="about">
      <div className="AboutStyle__container">
        <div className="AboutStyle__container--div">
          <div className="AboutStyle__container--divPerfil">
            <img
              className="AboutStyle__container--image"
              src={imagePerfil}
              alt=""
            />
            <div className="AboutStyle__container--divName">
              <p>Hello, i'm Melissa</p>
              <p className="AboutStyle__container--dev">Dev Full-Stack</p>
            </div>
          </div>
          <div className="AboutStyle__container--Text">
            <div className="AboutStyle__container--Title">
              <h2 className="AboutStyle__container--TitleColor">Amo</h2>
              <h2>a arte de</h2>
              <h2 className="AboutStyle__container--TitleColor">programar</h2>
            </div>
            <div>
              <TypographySubtitles className="AboutStyle__container--TextAbout">
                Sou uma amante da tecnologia, e encontrei meu lugar na
                programação. Já fiz diversos projetos ao longo da minha jornada
                e sou completamente apaixonada por codigos.
              </TypographySubtitles>
            </div>
            <div>
              <a
                className="AboutStyle__container--linkgit"
                target="blank"
                href="https://github.com/MewOkami"
              >
                <img
                  className="AboutStyle__container--gitimage"
                  src={github}
                  alt=""
                />
                My GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="AboutStyle__containerImage">
          <img
            className="AboutStyle__containerImage--image"
            src={imagemCodigo}
            alt=""
          />
        </div>
      </div>
    </AboutStyle>
  );
};
