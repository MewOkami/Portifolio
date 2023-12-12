import styled from "styled-components";

export const ToolsStyle = styled.section`
  background-color: var(--color-primary);

  .ToolsStyle__containerTitle {
    color: var(--grey-0);

    padding: 30px 30px;
    padding-bottom: 0px;
  }

  .ToolsStyle__container {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;

    padding: 50px 30px;

    overflow-y: hidden;
  }

  .ToolsStyle__container--divImg {
    background-color: var(--grey-0);

    display: flex;
    justify-content: center;

    height: 80px;
    padding: 10px;

    border-radius: 8px;
    border: solid 2px var(--sucess);
  }

  .ToolsStyle__container--image {
    width: 80px;
  }

  @media (min-width: 768px) {
    .ToolsStyle__container {
      padding: 50px 10vw;
    }

    .ToolsStyle__container::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    .ToolsStyle__container::-webkit-scrollbar-thumb {
      background-color: var(--grey-1);
    }

    .ToolsStyle__containerTitle {
      padding: 30px 10vw;
      padding-bottom: 0px;
    }
  }
`;
