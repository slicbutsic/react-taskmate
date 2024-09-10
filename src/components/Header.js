import Logo from '../assets/logo.png';

export const Header = () => {
  return (
    <div className='header'>
      <img className='header' src={Logo} alt="logo" />
      <a className='home-link' href="/">Home</a>
    </div>
  )
}
