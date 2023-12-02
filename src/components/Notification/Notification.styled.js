import styled from '@emotion/styled';

const Wrapper = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 300,
    padding: 20,
    borderRadius: 10,
  };
});

export default Wrapper;
