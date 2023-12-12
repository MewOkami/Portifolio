import styled from "styled-components";

export const AboutStyle = styled.section`
  background-color: var(--color-primary-50);
  color: var(--grey-0);

  .AboutStyle__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    border-bottom: solid 4px var(--shadow);

    gap: 20px;
  }

  .AboutStyle__container--div {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    padding: 30px 40px;
    padding-top: 120px;

    gap: 20px;
  }

  .AboutStyle__container--divPerfil {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;
  }

  .AboutStyle__container--divName {
    display: flex;
    flex-direction: column;

    gap: 15px;
  }

  .AboutStyle__container--dev {
    color: var(--sucess);
  }

  .AboutStyle__container--Text {
    display: flex;
    flex-direction: column;

    gap: 25px;
  }

  .AboutStyle__container--Title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 6px;
  }

  .AboutStyle__container--TitleColor {
    color: var(--sucess);
  }

  .AboutStyle__container--TextAbout {
    color: var(--grey-1);
  }

  .AboutStyle__container--gitimage {
    width: 25px;
  }

  .AboutStyle__container--linkgit:hover {
    background-color: var(--color-primary-Disable);
  }

  .AboutStyle__container--linkgit {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;

    padding: 3px 10px;
    width: 130px;

    border-radius: 8px;

    background-color: var(--sucess);
    color: var(--color-primary);

    text-decoration: none;
  }

  .AboutStyle__container--image {
    width: 50px;
    border-radius: 100%;
  }

  .AboutStyle__containerImage {
    height: 80%;
  }

  .AboutStyle__containerImage--image {
    width: 100vw;
    height: 80%;

    opacity: 40%;
  }

  @media (min-width: 768px) {
    .AboutStyle__container {
      flex-wrap: nowrap;
      justify-content: space-between;
    }

    .AboutStyle__container--div {
      width: 30vw;
      padding: 40px 10vw;
      padding-top: 120px;
      align-content: center;

      gap: 30px;
    }

    .AboutStyle__containerImage--image {
      width: 100%;
      height: 100%;

      padding-top: 66px;
    }

    .AboutStyle__container--image {
      width: 70px;
    }
  }

  @media (max-width: 1070px) {
    .AboutStyle__containerImage--image {
      height: 100vh;
    }
  }
`;
