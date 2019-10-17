import styled from 'styled-components';
import css from '@styled-system/css';

export const FileContainer = styled.div(props =>
  css(theme => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: 2,
    paddingY: 1,
    paddingLeft: theme.space[3] * (props.depth + 1),
    backgroundColor: props.isSelected ? 'grays.500' : 'transparent',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'grays.500',
    },
  }))
);

export const IconContainer = styled.span(
  css({
    display: 'inline-flex',
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  })
);

export const FileName = styled.span(
  css({
    marginLeft: 1,
  })
);
