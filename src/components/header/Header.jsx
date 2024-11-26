import "./header.css"
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import { ProducHandleValue } from "../slices/ProductsSlice"
import PageLogo from "./Maskgroup.png"
import { Link } from "react-router-dom";
export default function SectionOne() {
   const [filterVal, setFilterVal] = useState("")
   const dispatch = useDispatch()
   return (
      <>
         <div className="sectionOne">
             <div className='logo-parent'>
                 <div className='logo-box'>
                   <Link to='/'><img className='img-logo' src={PageLogo} alt="Logo"></img></Link>
                 </div>
             </div>
           <div className='parent-search'>
             <div className="inp-box">
               <input
                 onChange={(e) => {
                   setFilterVal(e.target.value)
                 }}
                 value={filterVal}
                 type="text"
                 className="global-search"
                 placeholder="Поиск"
               />
               <div
                 onClick={() => {
                   if (filterVal.trim() !== "") {
                     dispatch(ProducHandleValue(filterVal))
                   }
                 }}
                 className="icon-global-search-box">
                 <SearchIcon
                   className="icon-global-search"
                   fontSize="medium">
                 </SearchIcon>
               </div>
             </div>
           </div>
           <div className='Sign-box'>
             <Link className='link-to' to='/signin'><p className='signin-text'>Вход</p></Link>
           </div>
         </div>
      </>
   )
}
