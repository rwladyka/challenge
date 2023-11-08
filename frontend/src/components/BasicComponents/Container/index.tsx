import { ReactNode } from 'react';
import { StyledContainer } from './Container.styled';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => <StyledContainer>{children}</StyledContainer>;

export default Container;
