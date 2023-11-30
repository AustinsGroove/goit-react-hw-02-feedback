import Wrapper from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <Wrapper className="notification-box">
      <p className="no-feedback-message">{message}</p>
    </Wrapper>
  );
};

export default Notification;
