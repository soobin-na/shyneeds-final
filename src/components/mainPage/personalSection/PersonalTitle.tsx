import styled from 'styled-components';

export const PersonalTitle = () => {
  return (
    <PersonalTitleStyles>
      취향에 맞는 여행을 알아볼까요?
    </PersonalTitleStyles>
  )
}

const PersonalTitleStyles = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-top: 1rem;
`