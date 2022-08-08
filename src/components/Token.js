import React,{useState} from 'react'
import styled from 'styled-components'
import { useDispatch,useSelector } from 'react-redux'
import { addToken } from '../Redux/Slicer/tokenSlicer'
import TokenItem from "./TokenItem"



const Token = () => {
const myData = useSelector(allState => allState.token.tokens)

const dispatch =useDispatch()

const [inputValue,setInput] = useState("")
const [automatic,setAutomatic] = useState(false)
const [token,setToken] = useState("565902")


  const clickHandler =(value)=>{
    let temp = document.querySelector("input").value + String(value)
    document.querySelector("input").value = temp
    setInput(temp)
  }

  const clearHandler =() =>{
    let temp= inputValue;
    temp = temp.slice(0,-1) 
    setInput(temp)
  }
  const autoGenerate = () =>{
    if(myData.length < 6){
      let t = Math.floor(100000 + Math.random() * 900000);
      setToken(t)
      setTimeout(() =>{
        dispatch(addToken(token))
        setAutomatic(false)
      },3000)
      setAutomatic(true)
    }else{
      alert("You have reached your limit")
    }
  }

  const generateToken = () =>{
    if(inputValue.length > 6 || inputValue.length < 6){
      alert("please enter only 6 digit number ")
      setInput("")
    }else{
      if(myData.length < 6){
        dispatch(addToken(inputValue))
        alert("Token Added Successfully")
        setInput("")
      }else{
        alert("You have reached your limit")
      }
  }
}

  return (
    <Wrapper>
      <h1>Token Generator</h1>
      <Container>
        <Manual>
          <InputContainer>
            <input type="number"  value={inputValue} required />
            <label>Enter Number</label>
          </InputContainer>
          <ButtonContainer>
            <button onClick={() =>{clickHandler(9)}}>9</button>
            <button onClick={() =>{clickHandler(8)}}>8</button>
            <button onClick={() =>{clickHandler(7)}}>7</button>
            <button onClick={() =>{clickHandler(6)}}>6</button>
            <button onClick={() =>{clickHandler(5)}}>5</button>
            <button onClick={() =>{clickHandler(4)}}>4</button>
            <button onClick={() =>{clickHandler(3)}}>3</button>
            <button onClick={() =>{clickHandler(2)}}>2</button>
            <button onClick={() =>{clickHandler(1)}}>1</button>
            <button onClick={() =>{clickHandler(0)}}>0</button>
            <button onClick={() =>{clearHandler()}}>X</button>
            <button onClick={() =>{generateToken()}}>Go</button>
          </ButtonContainer>
        </Manual>
        <Automatic>
          {automatic ? 
            <div className='overlay'>
              <div className='loader'></div>
            </div>
            :
            <div className='auto'>
              <h3>Automatic</h3>
                <img onClick={autoGenerate} alt={"abhishek"} src='/images/images-removebg-preview.png' />
            </div>
          }
        </Automatic>
        <AvailableToken>
          <TokenItem />
        </AvailableToken>
      </Container>
    </Wrapper>
  )
}
export default Token


const Wrapper = styled.div`
  width:100%;
  height:100vh;
  background-color:black;
  display:flex;
  flex-direction: column ;
  justify-content:center;
  align-items:center;
  gap:1rem;

  h1{
    color:#00dfc4;

  }
  @media screen and (max-width:700px){
    height:100%;
  }
`
const Container = styled.div`
  width:80%;
  height:75vh;
  background-color:#1d2b3a;
  border:1px solid #00dfc4;
  display:grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  place-items:center;
  @media screen and (max-width:1000px){
    width:95%;
  }
  @media screen and (max-width:830px){
    width:100%;
  }
  @media screen and (max-width:700px){
    grid-template-columns: repeat(1,minmax(0,1fr));
    height:inherit;
    width:70%;

  }
  @media screen and (max-width:700px){
    width:100%;

  }
`
const Manual = styled.div`
  padding:2rem;
  display:flex ;
  flex-direction:column;
  width:100%;
  justify-content: center ;
  gap:1rem;
`

const ButtonContainer =styled.div`
  width:100%;
  display:grid ;
  grid-template-columns: repeat(3,minmax(0,1fr));
  grid-gap: 10px;
  margin-top: 1rem ;

  button{
    padding: 1rem;
    font-size:1.3rem ;
    font-weight: bold;
    cursor:pointer ;
    background-color: black ;
    border:1px solid white;
    border-radius:5px ;
    color:white;
    box-shadow: -1px -5px 5px 0px rgba(255,255,255,1);
    &:hover{
      transform: scale(1.1) ;
    }

  }

`

const Automatic = styled.div`
  padding: 1rem ;
  display: flex ;
  border:3px solid #00dfc4;
  height:fit-content;
  justify-content:center ;
  flex-direction: column ;
  align-items: center ;
  position: relative ;
  border-radius:50% ;
  width:100%;
  height:70%;
  box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,rgb(0 0 0 /73%) 0 16px 10px -10px;
  h3{
    color:#00dfc4;
    text-align: center ;
    margin-bottom:1rem ;
  }
  .auto{
    img{
      border-radius:50% ;
      cursor:pointer ;
    }
  }


  .overlay{
   
    display: flex ;
    justify-content:center ;
    align-items: center ;
    position: absolute ;
    background-color: rgba(0,0,0,.3) ;
    inset:0;
    border-radius:50%;
  }

  .loader {
  width: 8rem;
  height: 8rem;
  border-right: 4px solid #ffffff;
  border-radius: 100%;
  animation: spinRight 800ms linear infinite;
  
  &:before, &:after {
    content: '';
    width: 6vmax;
    height: 6vmax;
    display: block;
    position: absolute;
    top: calc(50% - 3vmax);
    left: calc(50% - 3vmax);
    border-left: 3px solid #ffffff;
    border-radius: 100%;
    animation: spinLeft 800ms linear infinite;
  }
  
  &:after {
    width: 4vmax;
    height: 4vmax;
    top: calc(50% - 2vmax);
    left: calc(50% - 2vmax);
    border: 0;
    border-right: 2px solid #ffffff;
    animation: none;
  }
}
`

const AvailableToken =styled.div`
  overflow: auto ;
  width:100%;
  height:100%;
`



const InputContainer = styled.div`
  width:100%;
  position: relative;
  input{
    width:100%;
    padding:0.7rem 1rem ;
    border:1px solid #00dfc4;
    outline:none ;
    color:#00dfc4;
    border-radius:10px;
    background:transparent ;
  }

  label{
    position:absolute ;
    left:0;
    font-size:1.2rem ;
    padding:0.3rem 1rem ;
    color:#00dfc4;
    pointer-events:none;
  }

  input:focus ~ label,input:valid ~ label{
    transition:all 300ms ;
    font-size:1rem ;
    transform:translate(16px,-12px);
    background-color:#1d2b3a;
    padding:0 0.5rem; 
    letter-spacing:1.5px ;
    
  }

`