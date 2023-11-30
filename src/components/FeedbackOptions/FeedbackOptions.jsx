import Wrapper from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnText = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  };
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
                {btnText[option]}
              </button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default FeedbackOptions;
