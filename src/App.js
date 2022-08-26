import React from 'react'
//import {Header, Content, Footer} from './func-component'
//import Calendar from './class-component'
import MsgBox from './class-props'

function App(){
  /*
  return(
    [<Header/>,<Content/>,<Footer/>]
  )
  */
  /*
  return (
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Footer/>
    </>
  )
  */
  return (
    <MsgBox
      text="React & React Native"
      color="red"
      bgColor="#ccc"
      fontsize="18pt"
      border="solid 1px black"
    />
  )
}
export default App