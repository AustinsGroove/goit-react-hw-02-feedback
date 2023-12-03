import styled from '@emotion/styled';

const Wrapper = styled('div')(() => {
  return {
    ul: {
      display: 'flex',
      gap: 10,
      li: {
        button: {
          textTransform: 'capitalize',
          width: 100,
          padding: 10,
          borderRadius: 10,
          border: 0,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
          },
          '&:active': {
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          },
        },
      },
    },
  };
});

export default Wrapper;
