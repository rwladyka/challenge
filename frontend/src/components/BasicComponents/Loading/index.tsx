import { LoadingWrapper, StyledLoading } from './Loading.styled';

const Loading = () => (
  <LoadingWrapper>
    <StyledLoading data-testid="rw-loading-test-id">
      <div />
      <div />
      <div />
      <div />
    </StyledLoading>
  </LoadingWrapper>
);

export default Loading;
