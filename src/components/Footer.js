import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>{currentYear} - TaskMate</p>
    </footer>
  )
}

