import styled from "styled-components";

const UserLevelWrapper = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  align-items: center;
`;

export const CurrentLevelWrapper = styled.div`
  .heading {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
export const LevelWrapper = styled.div`
  padding: 1rem 2rem;
  margin: 1rem;
  background: #ebedfb;

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

export default UserLevelWrapper;
