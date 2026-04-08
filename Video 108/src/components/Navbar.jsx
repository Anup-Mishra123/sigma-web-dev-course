import Reactl, {useEffect} from 'react'


const Navbar = ({color}) => {
  //case 1: run on every render
   useEffect(() => {
    alert("Hey I will run on every rendom")
  })
  
  //case 2: run only on first render
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  }, [])
  
    //case 3: run only when certain values changed
     useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])

  return (
    <div>
      I am a Navbar {color} color here...
    </div>
  )
}

export default Navbar
