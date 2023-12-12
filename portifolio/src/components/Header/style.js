import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: var(--color-primary);
  color: var(--grey-0);

  width: 100vw;

  position: fixed;

  z-index: 2;

  .HeaderStyle__conteiner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    border-bottom: solid 1px var(--sucess);

    gap: 10px;

    padding: 20px 30px;
  }

  .HeaderStyle__conteiner--links {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;
  }

  .HeaderStyle__conteiner--link {
    text-decoration: none;
    color: var(--grey-1);
  }

  .HeaderStyle__conteiner--link:hover {
    color: var(--grey-0);
    border-bottom: solid 1px var(--grey-0);

    cursor: pointer;
  }

  @media (min-width: 768px) {
    .HeaderStyle__conteiner {
      padding: 20px 10vw;
    }
  }
`;
