import PropTypes from 'prop-types';

const FoodComponent = (props) => {
  const {content} = props;

  return (
    <div>
      <p style={{
        color: 'red'
      }}>나는 {content} 좋아</p>
    </div>
  )
}

FoodComponent.defaultProps = {
  content: '제로 콜라',
}

FoodComponent.propTypes = {
  content: PropTypes.string,
}

export default FoodComponent;