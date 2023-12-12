import styled from "styled-components";

export const ProjectsStyle = styled.main`
  background-color: var(--color-primary);
  color: var(--grey-1);

  padding: 30px 0px;
  padding-bottom: 100px;

  .ProjectsStyle__containerTitle {
    display: flex;
    flex-direction: column;

    gap: 13px;

    padding: 20px 30px;
    padding-bottom: 60px;
  }

  .ProjectsStyle__containerTitle--creatAt {
    display: flex;
    flex-direction: row;

    gap: 5px;
  }

  .ProjectsStyle__containerTitle--creator {
    color: var(--sucess);
  }

  .ProjectsStyle__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 80px;

    padding: 0px 30px;
  }

  .ProjectsStyle__container--div {
    display: flex;
    flex-direction: column;

    gap: 20px;

    width: 300px;
  }

  .ProjectsStyle__container--linguagemDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    gap: 15px;
  }

  .ProjectsStyle__container--linguagem {
    padding: 5px;
    background-color: var(--color-primary-50);

    border-radius: 4px;
  }

  .ProjectsStyle__container--title {
    color: var(--grey-0);
  }

  .ProjectsStyle__container--link:hover {
    background-color: var(--color-primary-Disable);
  }

  .ProjectsStyle__container--link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 5px;

    text-decoration: none;
    background-color: var(--sucess);

    padding: 4px;
    width: 95px;

    border-radius: 4px;
    color: var(--grey-3);
  }

  .ProjectsStyle__container--containerLink {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    gap: 10px;
  }

  .ProjectsStyle__container--linkGit {
    background-color: var(--sucess);
    color: var(--grey-3);
    text-decoration: none;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 5px;

    border-radius: 4px;

    width: 97px;
    padding: 2px;
  }

  .ProjectsStyle__container--linkGit:hover {
    background-color: var(--color-primary-Disable);
  }

  .ProjectsStyle__container--linkImageGit {
    width: 20px;
  }

  @media (min-width: 768px) {
    .ProjectsStyle__containerTitle {
      color: var(--grey-0);

      padding: 0px 10vw;
      padding-bottom: 70px;
    }

    .ProjectsStyle__container--linguagemDiv {
      flex-wrap: nowrap;
    }

    .ProjectsStyle__container {
      justify-content: space-between;

      padding: 0px 10vw;
    }
  }
`;
