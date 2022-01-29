import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  p {
    margin: auto 0;
    :not(:last-child) {
      margin-right: 4px;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 6px;
  }

  button {
    padding: 6px;
    border: 1px solid var(--color-black);
    border-radius: 4px;
    :hover {
      background-color: var(--color-red);
      color: var(--color-white);
    }
  }
`;
