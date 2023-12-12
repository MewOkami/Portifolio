import {
  TypographySmallTexts,
  TypographySubtitles,
  TypographyTitles,
} from "../../styles/Typograph";
import { ProjectsStyle } from "./style";
import github from "../../assets/github.png";
import share from "../../assets/share.png";

export const Projects = () => {
  return (
    <ProjectsStyle id="projects">
      <div className="ProjectsStyle__containerTitle">
        <TypographyTitles>Meus projetos</TypographyTitles>
        <div className="ProjectsStyle__containerTitle--creatAt">
          <TypographySmallTexts>Projetos criados por</TypographySmallTexts>
          <TypographySmallTexts className="ProjectsStyle__containerTitle--creator">
            Melissa Sequeira
          </TypographySmallTexts>
        </div>
      </div>
      <section className="ProjectsStyle__container">
        <div className="ProjectsStyle__container--div">
          <h3 className="ProjectsStyle__container--title">Kenzie Hub</h3>
          <div className="ProjectsStyle__container--linguagemDiv">
            <p>Linguagem:</p>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>JavaScript</TypographySubtitles>
            </div>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>HTML</TypographySubtitles>
            </div>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>CSS</TypographySubtitles>
            </div>
          </div>
          <TypographySubtitles>
            Uma agenda de programadores, onde é possível adicionar as
            tecnologias que já aprendeu ou se está em processo de aprendizagem,
            esse projeto conta com um sistema de login.
          </TypographySubtitles>
          <div className="ProjectsStyle__container--containerLink">
            <div>
              <a
                className="ProjectsStyle__container--link"
                target="blank"
                href="https://entrega-kenzie-hub-mehlissa.vercel.app/"
              >
                <img src={share} alt="" />
                Aplicação
              </a>
            </div>
            <div className="ProjectsStyle__container--containerLinkGit">
              <a
                className="ProjectsStyle__container--linkGit"
                target="blank"
                href="https://github.com/Kenzie-Academy-Brasil-Developers/entrega-kenzie-hub-Mehlissa"
              >
                <img
                  className="ProjectsStyle__container--linkImageGit"
                  src={github}
                  alt=""
                />
                Git Code
              </a>
            </div>
          </div>
        </div>

        <div className="ProjectsStyle__container--div">
          <h3 className="ProjectsStyle__container--title">Nu Kenzie</h3>
          <div className="ProjectsStyle__container--linguagemDiv">
            <p>Linguagem:</p>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>JavaScript</TypographySubtitles>
            </div>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>HTML</TypographySubtitles>
            </div>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>CSS</TypographySubtitles>
            </div>
          </div>
          <TypographySubtitles>
            Um sistema de controle do financeiro, onde é possível adicionar
            valores tanto de entrada quando de saída.
          </TypographySubtitles>
          <div className="ProjectsStyle__container--containerLink">
            <div>
              <a
                className="ProjectsStyle__container--link"
                target="blank"
                href="https://react-entrega-s1-template-nu-kenzie-mehlissa.vercel.app/"
              >
                <img src={share} alt="" />
                Aplicação
              </a>
            </div>
            <div className="ProjectsStyle__container--containerLinkGit">
              <a
                className="ProjectsStyle__container--linkGit"
                target="blank"
                href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-Mehlissa"
              >
                <img
                  className="ProjectsStyle__container--linkImageGit"
                  src={github}
                  alt=""
                />
                Git Code
              </a>
            </div>
          </div>
        </div>

        <div className="ProjectsStyle__container--div">
          <h3 className="ProjectsStyle__container--title">Jobs</h3>
          <div className="ProjectsStyle__container--linguagemDiv">
            <p>Linguagem:</p>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>TypeScript</TypographySubtitles>
            </div>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>JavaScript</TypographySubtitles>
            </div>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>HTML</TypographySubtitles>
            </div>
          </div>
          <TypographySubtitles>
            Site voltado para programadores e empresas, onde programadores
            possam encontrar vagas de empregos e empresas possam encontrar novos
            funcionários. Esse projeto foi desenvolvido por um time de 5
            pessoas.
          </TypographySubtitles>
          <div className="ProjectsStyle__container--containerLink">
            <div>
              <a
                className="ProjectsStyle__container--link"
                target="blank"
                href="https://kenzie-job-grupo9-roan.vercel.app/"
              >
                <img src={share} alt="" />
                Aplicação
              </a>
            </div>
            <div className="ProjectsStyle__container--containerLinkGit">
              <a
                className="ProjectsStyle__container--linkGit"
                target="blank"
                href="https://github.com/T17-Grupo9/kenzie-job-grupo9"
              >
                <img
                  className="ProjectsStyle__container--linkImageGit"
                  src={github}
                  alt=""
                />
                Git Code
              </a>
            </div>
          </div>
        </div>

        <div className="ProjectsStyle__container--div">
          <h3 className="ProjectsStyle__container--title">
            Portfólio Template
          </h3>
          <div className="ProjectsStyle__container--linguagemDiv">
            <p>Linguagem:</p>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>JavaScript</TypographySubtitles>
            </div>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>HTML</TypographySubtitles>
            </div>
            <div className="ProjectsStyle__container--linguagem">
              <TypographySubtitles>CSS</TypographySubtitles>
            </div>
          </div>
          <TypographySubtitles>
            Um templete de um portifólio generico, focado somente na
            visualização.
          </TypographySubtitles>
          <div className="ProjectsStyle__container--containerLink">
            <div>
              <a
                className="ProjectsStyle__container--link"
                target="blank"
                href="https://entrega-portfolio-template-mehlissa.vercel.app/"
              >
                <img src={share} alt="" />
                Aplicação
              </a>
            </div>
            <div className="ProjectsStyle__container--containerLinkGit">
              <a
                className="ProjectsStyle__container--linkGit"
                target="blank"
                href="https://github.com/Kenzie-Academy-Brasil-Developers/entrega-portfolio-template-Mehlissa"
              >
                <img
                  className="ProjectsStyle__container--linkImageGit"
                  src={github}
                  alt=""
                />
                Git Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </ProjectsStyle>
  );
};
