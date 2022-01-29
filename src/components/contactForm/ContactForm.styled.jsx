import styled from "styled-components";

export const FormTable = styled.form`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: space-between;
  width: 100%;
`;

export const AddButton = styled.button`
  padding: 8px;
  border-radius: 4px;
  :hover {
    color: var(--color-white);
    background-color: var(--color-green);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  gap: 10px;
  input {
    margin-left: 4px;
    margin-right: 4px;
    width: 100%;
  }

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
