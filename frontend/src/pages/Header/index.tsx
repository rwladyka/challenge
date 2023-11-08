import { HeaderWrapper } from './Header.styled';
import MiniCart from '../../components/MiniCart';

const Header = () => (
  <HeaderWrapper>
    <div>Supermarket</div>
    <MiniCart />
  </HeaderWrapper>
);

export default Header;
