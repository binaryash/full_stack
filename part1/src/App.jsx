const Header = (props) => {
  
  return (
  <>
  <h1> {props.name} </h1>
  </>
  )
}

const Content = (props) => {

  return (
  <>
      <p> part{props.no} = {props.exname} </p>
  </>
  )
}

const Footer = (props) => {
  return (
  <>
      <p>exercise{props.no} = {props.exno}</p>
  </>
  )
}
const App = () => {
  const name1 = 'Half Stack application development'
return(
    <div>
      <Header name= {name1} />
      <content>
     </div>
  )
}

export default App
