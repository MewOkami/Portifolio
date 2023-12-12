import styled from "styled-components";

export const FooterStyle = styled.footer`
  .FooterStyle__container {
    background-color: var(--color-primary);
    color: var(--grey-1);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 30px;

    padding: 30px 40px;
  }

  .FooterStyle__container--divImage {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;
  }

  .FooterStyle__container--divtexts {
    display: flex;
    flex-direction: column;

    gap: 20px;
  }

  .FooterStyle__container--image {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }

  .FooterStyle__container--divCreator {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0px 70px;

    gap: 13px;

    width: 100vw;
  }

  .FooterStyle__container--divCreatorLink {
    color: var(--sucess);
  }

  @media (min-width: 768px) {
    .FooterStyle__container--image {
      width: 70px;
      height: 70px;
    }

    .FooterStyle__container {
      padding: 30px 150px;
      flex-wrap: nowrap;
    }

    .FooterStyle__container--divCreator {
      width: 200px;
    }
  }
`;
