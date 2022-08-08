import React from 'react'
import styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux'
import { deleteToken } from '../Redux/Slicer/tokenSlicer'

const TokenItem = () => {

 const dispatch =useDispatch() 
const myData = useSelector(allState => allState.token.tokens)
const deleteHandler =(id) =>{
  console.log(id)
  dispatch(deleteToken(id))
}
  return (

    <Wrapper>
      {
        myData.length === 0  ? <>
        <div className='limit'>
          <h1>There is No Token Available</h1>
        </div>
        </>  
        :
        <>
        {
          myData.map((item,index) =>(
            <TokenContainer key={index}>
              <p>Token</p>
              <h2>{item}</h2>
              <button onClick={() => deleteHandler(index)}>delete</button>
            </TokenContainer>
          ))
        }
        </>
      }
    </Wrapper>
  )
}

export default TokenItem


const Wrapper = styled.div`
  padding: 1rem ;
  height: inherit;
  color:#00dfc4;
  display: flex ;
  align-items: center ;
  text-align: center ;
  flex-direction: column ;
  justify-content: center ;

  .limit{
    width:100% ;
    height: 100% ;
    display: flex ;
    align-items: center ;
    @media screen and (max-width:830px){
    margin-top:10rem;
    }
    @media screen and (max-width:700px){
    margin-top:2rem;

    }
  }
`
const TokenContainer = styled.div`
  margin-bottom:0.7rem ;
  padding:0.5rem 1rem ;
  color:#00dfc4;
  border:3px solid rgb(249,249,249,0.1);
  cursor:pointer;
  border-radius:10px;
  box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,rgb(0 0 0 /73%) 0 16px 10px -10px;
  position:relative;
  transition:all 250ms;
  &:hover{
    transform:scale(1.05);
    border:3px solid rgb(249,249,249,0.8);
    box-shadow: rgb(0 0 0 /80%) 0 40px 58px -16px,rgb(0 0 0 /72%) 0 30px 22px -10px;
  }
  button{
    width:100% ;
    cursor:pointer;
    padding:0.2rem ;
    color:#00dfc4 ;
    background-color: black ;
    border:1px solid white;
  }
  h2{
    margin:0.5rem 2rem ;
  }
`