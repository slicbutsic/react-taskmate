import Logo from '../assets/logo.png';
import './Header.css';

export const Header = () => {
  return (
    <div className='header'>
      <img className='header' src={Logo} alt="logo" />
      <a className='home-link' href="/">Home</a>
    </div>
  )
}
