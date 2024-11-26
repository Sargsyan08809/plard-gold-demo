import "./navModalAdd.css"
import React from 'react'
import { useSearchParams } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { CloseSubItem, GetSubCategory, PostSubCategory, SubValue } from '../slices/NavSlice';
export default function NavModalAdd() {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const categoryQuery = +searchParams.get("category") || "";
  const { del, value } = useSelector(state => state.subcategory)
  return (
    <>
      <div
        onClick={(() => {
          dispatch(CloseSubItem(!del))
        })}
        className='navModalAdd-box'>+</div>
      {del ? (<div
        onClick={(() => {
          dispatch(CloseSubItem(!del))
        })}
        className='transparent-box'>
        <div onClick={((e) => {
          e.stopPropagation()
        })}>
          <div className='navModal-item'>
            <div className='navModal-item2'>
              <div className='navModal-item-title-close-box'>
                <div className="navModal-item-title">
                  добавить подкатегория
                </div>
                <div className="navModal-item-close">
                  <div className='navModal-item-close-icon-box'
                    onClick={(() => {
                      dispatch(CloseSubItem(!del))
                    })}
                  >
                    <CloseIcon></CloseIcon>
                  </div>
                </div>
              </div>
              <div className="add-subCategory">
                <input
                  type="text"
                  className='subCategoryInp'
                  placeholder='Подкатегория'
                  value={value}
                  onChange={((e) => {
                    dispatch(SubValue(e.target.value))
                  })}
                />
              </div>
              <div className='sub-category-add-btn-box'>
                <button
                  onClick={(() => {
                    if (value.trim() !== "") {
                      dispatch(PostSubCategory({ subname: value, parentId: categoryQuery })).then(() => {
                        dispatch(GetSubCategory())
                        dispatch(CloseSubItem(!del))
                        dispatch(SubValue(""))
                      })
                    } else (
                      alert("Write_Subcategory")
                    )
                  })}
                  className='sub-category-add-btn'>
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>) : null}
    </>
  )
}
