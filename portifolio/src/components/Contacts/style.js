import styled from "styled-components";

export const ContactsStyle = styled.section`
  background-color: var(--color-primary-50);
  color: var(--grey-0);

  .ContactsStyle__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 100px;

    padding: 50px 30px;
  }

  .ContactsStyle__container--linkedin {
    display: flex;
    flex-direction: column;

    gap: 25px;
  }

  .ContactsStyle__container--text {
    color: var(--grey-1);
  }

  .ContactsStyle__container--textLinkedin {
    color: var(--sucess);
  }

  .ContactsStyle__container--linkstyle {
    background-color: var(--color-secundary);
    color: var(--grey-0);

    display: flex;
    flex-direction: row;
    align-items: center;

    border: none;
    border-radius: 4px;

    gap: 5px;

    width: 100px;
    padding: 5px 10px;

    text-decoration: none;
  }

  .ContactsStyle__container--linkstyle:hover {
    background-color: var(--Negative);
  }

  .ContactsStyle__container--link {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 5px;
  }

  .ContactsStyle__containerContact {
    display: flex;
    flex-direction: column;

    gap: 50px;
  }

  .ContactsStyle__containerContact--div {
    display: flex;
    flex-direction: row;

    gap: 20px;
  }

  .ContactsStyle__containerContact--divImagewhats {
    background-color: var(--sucess);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;

    border-radius: 8px;
  }

  .ContactsStyle__containerContact--divImageEmail {
    background-color: var(--email);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;

    border-radius: 8px;
  }

  .ContactsStyle__containerContact--divContact {
    color: var(--grey-1);

    display: flex;
    flex-direction: column;

    gap: 15px;
  }

  .ContactsStyle__containerContact--divContactTitle {
    color: var(--grey-0);
  }

  .ContactsStyle__containerContact--divContactValue {
    color: var(--sucess);
  }

  @media (min-width: 768px) {
    .ContactsStyle__container {
      padding: 100px 10vw;
      align-items: center;

      gap: 50px;
    }

    .ContactsStyle__containerContact--divContact {
      width: 350px;
    }
  }
`;
