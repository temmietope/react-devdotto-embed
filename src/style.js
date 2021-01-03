import styled, { css } from 'styled-components'

export const PostsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const PostsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const PostCard = styled.div`
  height: 15rem;
  max-height: 15rem;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  margin: ${(props) => (props.margin ? `${props.margin} 0` : '1% 0')};
  ${(props) => {
    const validInts = [1, 2, 3, 4]
    return (
      validInts.includes(props.itemsPerRow) &&
      css`
        width: calc(
          ((1 / ${props.itemsPerRow}) * 100%) -
            ${props.margin ? props.margin : '1%'}
        );
      `
    )
  }}
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.6);
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const H3 = styled.h3`
  font-size: ${(props) => (props.headerSize ? props.headerSize : '1.5rem')};
  margin: 0;
  padding: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${(props) => (props.headerColor ? props.headerColor : '#333')};
  a:hover {
    text-decoration: underline;
  }
`

export const P = styled.p`
  font-size: ${(props) => (props.excerptSize ? props.excerptSize : '1.05rem')};
  color: ${(props) => (props.excerptColor ? props.excerptColor : '#333')};
`
