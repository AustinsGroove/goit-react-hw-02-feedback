import Wrapper from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Wrapper className="section-container">
      <h1 className="section-title">{title}</h1>
      {children}
    </Wrapper>
  );
};

export default Section;
