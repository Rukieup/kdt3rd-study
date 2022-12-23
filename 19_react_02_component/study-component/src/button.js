import './Button.css';

const Button = (props) => {
  console.log(props)
  const {link, children} = props;
  
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className='Button'>{props.children}</button>
    </a>
  )
}

Button.defaultProps = {
  children: '네이버',
  link: 'https://www.naver.com'
}

export default Button;