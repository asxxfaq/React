import {  Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AxiosGet from './Axios/AxiosGet'
import ContactForm from './LocalStorage/ContactForm'
import AxiosPost from './Axios/AxiosPost'
import ToDo from './LocalStorage/ToDo'
// import SimpleForm from '../form/SimpleForm'
// import Form from '../form/Form'
// import Crud from './LocalStorage/Crud'
// import Products from './Dynamic-Routing/Products'
// import Productdetails from './Dynamic-Routing/Productdetails'
// import Home from './Nested-Routing/Pages/Home'
// import Navbar from './Nested-Routing/Navbar'
// import About from './Nested-Routing/Pages/About'
// import Services from './Nested-Routing/Pages/Services'
// import ContactUs from './Nested-Routing/Pages/ContactUs'
// import Webdev from './Nested-Routing/Pages/Services/Webdev'
// import AppDev from './Nested-Routing/Pages/Services/AppDev'
// import Person from './embeding-expression/Person'
// import Items from './React-Keys/Items'
// import AllProducts from './React-Keys/AllProducts'
// import Basic from './FunctionalComponents/Basic'
// // import Home from './FunctionalComponents/Hooks/UseContext/Theme/Home'
// import { ThemeProvider } from './FunctionalComponents/Hooks/UseContext/Theme/ThemeContext'
// import { UserAPIProvider } from './FunctionalComponents/Hooks/UseContext/UserList/UserAPIContext'
// import UserList from './FunctionalComponents/Hooks/UseContext/UserList/UserList'
// import UseEff from './FunctionalComponents/Hooks/useEffect/UseEff'
// import Home from './ReactRouterDom/Home'
// import About from './ReactRouterDom/About'
// import UserList from './FunctionalComponents/Hooks/useEffect/UserList'
// import Counter from './FunctionalComponents/Hooks/useState/Counter'
// import Props from './FunctionalComponents/Props'
// import State from './FunctionalComponents/state'
// import Basic from './Basic'
// import CallingFunction from './embeding-expression/CallingFunction'
// import Conditional from './embeding-expression/conditional'
// import Welcome from './embeding-expression/Welcome'

function App() {

  return (
    <>
      {/* // embeding expression
    // {/* <Basic/> */}
      {/* <Welcome />
      <CallingFunction />
      <Conditional />
      <Basic /> */}
      {/* <Person /> */}


      {/* <-------React keys------------> */}
      {/* <Items/> */}
      {/* <AllProducts/> */}

      {/* <-----------Form Validation-----------> */}
      {/* <SimpleForm/> */}
      {/* <Form/> */}
       


        {/*------------------------------ Local Storage ----------------------------- */}
 {/* <Crud/> */}
 {/* <ContactForm/> */}



      {/* // <----------Functional components --------> */}
      {/* <Basic /> */}
      {/* <State/> */}
      {/* <Props/> */}
      {/* <Counter/> */}
      {/* <UseEff/> */}
      {/* <UserList/> */}

      {/* ------------------Use Context----------------- */}

      {/* 1.Theme  */}
      {/* <ThemeProvider>
      <Home/>
    </ThemeProvider> */}
      {/* <UserAPIProvider>
      <UserList/>
    </UserAPIProvider> */}


{/* ------------------------Axios----------------------------- */}
{/* <AxiosGet/> */}
{/* <AxiosPost/> */}



{/* <-----------------------To Do--------------> */}
<ToDo/>

      {/* ---------------1.Basic Router DOM---------------- */}

      <div>
        {/* <nav>
          
        <Link to='/'>Home |</Link>
        <Link to='/about'> About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about' element={<About/>} />
        </Routes> */}

        {/* 2.<----------Dynamic Routing---------> */}
        {/* <Routes>
  <Route path='/' element={<Products/>}/>
  <Route path='/products/:id' element={<Productdetails/>}></Route>
</Routes>


      */}

        {/* 3.Nested Routing  */}

        {/* <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path='/services' element={<Services/>}>
          <Route path='web-dev' element={<Webdev/>}/>
          <Route path='app-dev' element={<AppDev/>}/>
          </Route>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Routes> */}
      </div>
    </>

  )
}


// -------------ClassComponents---------

// import React, { Component } from 'react'
// import BasicClass from './ClassComponents/BasicClass'
// import Counter from './ClassComponents/Counter'
// import Mounting from './ClassComponents/LifeCycleMethods/Mounting'
// import Update from './ClassComponents/LifeCycleMethods/Update'
// import UnMounting from './ClassComponents/LifeCycleMethods/UnMounting'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <BasicClass/> */}
//         {/* <Counter/> */}


//       {/* -----Life Cycle Methods--------- */}

//       {/* <Mounting/> */}
//       {/* <Update/> */}
//       <UnMounting/>



//       </div>
//     )
//   }
// }


export default App
