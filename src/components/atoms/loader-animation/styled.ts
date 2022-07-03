import styled from 'styled-components'

export const First = styled.div`
  background: #eaeaea;
  border-radius: 12px;
  height: 24px;
  margin-left: 4px;
  margin-right: 4px;
  width: 24px;

  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-name: changeColor1;
  animation-timing-function: linear;

  @keyframes changeColor1 {
    0% {
      background-color: #818185;
    }

    33% {
      background-color: #eaeaea;
    }

    66% {
      background-color: #eaeaea;
    }
  }
`

export const Second = styled.div`
  background: #eaeaea;
  border-radius: 12px;
  height: 24px;
  margin-left: 4px;
  margin-right: 4px;
  width: 24px;

  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-name: changeColor2;
  animation-timing-function: linear;

  @keyframes changeColor2 {
    0% {
      background-color: #eaeaea;
    }

    33% {
      background-color: #818185;
    }

    66% {
      background-color: #eaeaea;
    }
  }
`

export const Third = styled.div`
  background: #eaeaea;
  border-radius: 12px;
  height: 24px;
  margin-left: 4px;
  margin-right: 4px;
  width: 24px;

  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-name: changeColor3;
  animation-timing-function: linear;

  @keyframes changeColor3 {
    0% {
      background-color: #eaeaea;
    }

    33% {
      background-color: #eaeaea;
    }

    66% {
      background-color: #818185;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
