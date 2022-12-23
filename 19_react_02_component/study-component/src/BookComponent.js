import PropTypes from 'prop-types';
import Book from './book.jpg';


const BookComponent =  (props) => {
  const {title, author, price, type} = props;
  return (
    <div style = {{
      backgroundColor: 'yellow'
    }
    }>
      <h2>{title}</h2>
      <img src={Book} alt="" />
      <p>저자: {author}</p>
      <p>판매가: {price}</p>
      <p>구분: {type}</p>
    </div>
  )
}

export default BookComponent;