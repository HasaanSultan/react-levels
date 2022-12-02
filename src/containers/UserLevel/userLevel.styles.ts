import styled from "styled-components";

const UserLevelWrapper = styled.div`
  max-width: 35rem;
  margin: 0 auto;
  align-items: center;
  .flex {
    gap: 1rem;
    align-items: center;
    justify-content: start;
    position: relative;
  }
`;

export const CurrentLevelWrapper = styled.div`
  .heading {
    font-weight: 600;
    font-size: 1.2rem;
    margin-right: 2rem;
  }
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 3px;
  margin-bottom: 1rem;
`;
export const LevelWrapper = styled.div`
  padding: 1rem 2rem;
  margin: 1rem;
  background: #ebedfb;
  cursor: pointer;

  &.disabled {
    filter: blur(0.5px);
  }
  &.bronze {
    background: #b0956e;
  }

  &.sliver {
    background: #b9b9bb;
  }

  &.gold {
    background: #c8c081;
  }

  &.platinum {
    background: #c0c0b9;
  }
`;

export const LevelName = styled.div`
  position: absolute;
  left: 3%;
`;

export default UserLevelWrapper;
