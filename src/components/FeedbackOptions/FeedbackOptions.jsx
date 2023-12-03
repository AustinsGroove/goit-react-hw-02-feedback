import Wrapper from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                className="button"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default FeedbackOptions;
