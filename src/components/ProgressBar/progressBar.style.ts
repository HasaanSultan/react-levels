import styled from "styled-components";
import { Line } from "rc-progress";

export const CustomProgressBar = styled(Line)`
  width: 100%;
  height: 3rem;
  border-radius: 5rem;

  &.blue .rc-progress-line-trail {
    stroke: #f6f7fe;
  }

  &.bronze .rc-progress-line-trail {
    stroke: #8c7a61;
  }

  &.sliver .rc-progress-line-trail {
    stroke: #f1f0ee;
  }

  &.gold .rc-progress-line-trail {
    stroke: #e2d88c;
  }

  &.platinum .rc-progress-line-trail {
    stroke: #fbf9ec;
  }
`;
