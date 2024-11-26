import "./modalCategory.css"
import imageUploaderPng from "./categoryImage/imageUpload.png"
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw';
import { GetGenderCategory, PostGenderCategory } from '../slices/GenderCategorySlice';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CloseCategoryItem } from '../slices/MaleFemaleSlice';
import ImageUploading from "react-images-uploading";
import { useSearchParams } from "react-router-dom";

export default function ModalCategory() {
   const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
   };
   const [searchParams, setSearchParams] = useSearchParams()
   const [images, setImages] = useState([]);
   const [img, setImg] = useState('');
   const dispatch = useDispatch()
   const [chooseBtnWoman, setChooseBtnWoman] = useState("grey")
   const [chooseBtnMan, setChooseBtnMan] = useState("grey")
   const [CategoryValue, setCategoryValue] = useState("")
   const [parentId, setParentId] = useState(null)
   const { delcategory } = useSelector(state => state.gender)
   useEffect(() => {
      dispatch(GetGenderCategory())
   }, [])
   return (
      <div className='modalCategory'
         onClick={(() => {
            dispatch(CloseCategoryItem(!delcategory))
         })} >
         <div>
            +
         </div>
         {delcategory ? (
            <div
               className='transparent-box'
               onClick={(() => {
                  dispatch(CloseCategoryItem(!delcategory))
               })
               }>
               <div
                  className='addCategoryBox'
                  onClick={((e) => {
                     e.stopPropagation()
                  })
                  }>
                  <div className='addCategory'>
                     <div className='addCategoryTop'>
                        <div className='addCategoryTitle'>добавить категория</div>
                        <div className='closeCategoryModal'>
                           <div className='closeIconBox'
                              onClick={(() => {
                                 dispatch(CloseCategoryItem(!delcategory))
                              })}>
                              <CloseIcon></CloseIcon>
                           </div>
                        </div>
                     </div>
                     <div className='addCategoryMaleFemale'>
                        <button
                           onClick={() => {
                              setSearchParams({ gender: 1 })
                              setParentId(1)
                              setChooseBtnWoman("red")
                              setChooseBtnMan("grey")
                           }}
                           className='btnMaleFemale'>
                           <div className="btn-gender-icon">
                              {/* womanSvg */}
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M3.19275 13.5375L6.06599 12.8196L6.23176 12.1564C5.16951 12.0125 4.13926 11.6902 3.18453 11.2032C3.07811 11.1394 3.01019 11.0272 3.00301 10.9034C2.99549 10.7796 3.04896 10.6598 3.14628 10.5827C3.15978 10.5737 4.50003 9.46762 4.50003 5.63532C4.50003 2.40326 5.25677 0.764386 6.75003 0.764386H6.97503C7.49309 0.208152 8.24431 -0.0698417 9.00002 0.0150247C10.4093 0.0150247 13.5 1.4306 13.5 5.63532C13.5 9.46762 14.8403 10.5737 14.85 10.5812C15.0158 10.7051 15.0497 10.9399 14.9257 11.1057C14.8966 11.1445 14.8602 11.1774 14.8185 11.2024C13.8646 11.694 12.833 12.0175 11.769 12.1586L11.9348 12.8203L14.8072 13.5382C16.6853 14.0051 18.0027 15.6915 18 17.6253C18 17.8322 17.8321 18 17.625 18H0.374987C0.167881 18 -2.47955e-05 17.8322 -2.47955e-05 17.6253C-0.00308418 15.6913 1.31436 14.0044 3.19275 13.5375Z" fill={chooseBtnWoman} />
                              </svg>
                           </div>
                           <div className="btn-female-text">Женский</div>
                        </button>
                        <button
                           onClick={() => {
                              setSearchParams({ gender: 2 })
                              setParentId(2)
                              setChooseBtnMan("red")
                              setChooseBtnWoman("grey")
                           }}
                           className='btnMaleFemale'>
                           <div className="btn-gender-icon">
                              {/* manSvg */}
                              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clipPath="url(#clip0_312_187)">
                                    <path d="M18.989 17.5343L18.514 15.7343C18.2887 14.861 17.6054 14.1588 16.705 13.875L13.2217 12.7755C12.3722 12.4403 11.9835 11.1443 11.8996 10.6522C12.5469 10.1423 12.9633 9.41685 13.0634 8.62499C13.0491 8.48974 13.0828 8.35383 13.1591 8.23873C13.2826 8.20944 13.3836 8.1257 13.4307 8.01373C13.6586 7.49088 13.8016 6.93837 13.855 6.37499C13.8551 6.34437 13.8512 6.31389 13.8431 6.28425C13.7864 6.06533 13.6506 5.87215 13.4592 5.73824V3.74998C13.4592 2.54173 13.0697 2.04599 12.6596 1.75873C12.5813 1.17675 11.9234 0 9.50089 0C7.35163 0.0819844 5.62909 1.71387 5.54255 3.75001V5.73827C5.35114 5.87218 5.21528 6.06537 5.15858 6.28429C5.15056 6.31392 5.14659 6.34444 5.1467 6.37502C5.19999 6.93868 5.34305 7.49145 5.57105 8.01453C5.60534 8.12053 5.69525 8.20206 5.80855 8.2298C5.85289 8.25078 5.93602 8.35956 5.93602 8.62506C6.03662 9.41917 6.45551 10.1463 7.10611 10.6561C7.02299 11.1473 6.63664 12.4426 5.81096 12.7696L2.29674 13.875C1.3971 14.1588 0.714283 14.8603 0.488584 15.7328L0.0135835 17.5328C-0.040188 17.7336 0.0879879 17.9376 0.299882 17.9885C0.331537 17.9962 0.364082 18 0.396738 18.0001H18.6051C18.8237 18 19.0009 17.8321 19.0008 17.625C19.0008 17.5943 18.9968 17.5639 18.989 17.5343Z" fill={chooseBtnMan} />
                                 </g>
                                 <defs>
                                    <clipPath id="clip0_312_187">
                                       <rect width="19" height="18" fill="white" />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </div>
                           <div className="btn-female-text">Мужской</div>
                        </button>
                     </div>
                     <div className='add-category-box'>
                        <input type="text"
                           placeholder='Категория'
                           className='add-category-inp'
                           value={CategoryValue}
                           onChange={((e) => {
                              setCategoryValue(e.target.value)
                           })
                           } />
                     </div>
                     
                     {/* imageUploader */}
                     <div className='category-img-uploader-male-female'>
                        <ImageUploading
                           value={images}
                           onChange={onChange}
                           maxNumber={1}
                           dataURLKey="data_url">
                           {({
                              imageList,
                              onImageUpload,
                              onImageUpdate,
                              onImageRemove,
                              dragProps,
                           }) => (
                              <div className="upload-image">
                                 {imageList &&
                                    <button
                                       className='imgae-uploader'
                                       onClick={onImageUpload}
                                       {...dragProps}
                                    >
                                       <img src={imageUploaderPng} alt="" />
                                       <p className='Img-upload-text-load'>Загрузить Фото</p>
                                    </button>}
                                 &nbsp;
                                 {imageList.map((image, index) => {
                                    image && setImg(image["data_url"]);
                                    return <div key={index} className="image-item">
                                       <img src={image["data_url"]} width="100" />
                                       <div className="image-item__btn-wrapper">
                                          <div className='modal-img-remove-update'>
                                             <span className='update-button' onClick={() => onImageUpdate(index)}>
                                                <Rotate90DegreesCcwIcon />
                                             </span>
                                             <span className='remove-button' onClick={() => onImageRemove(index)}>
                                                <DeleteForeverIcon />
                                             </span>
                                          </div>
                                       </div>
                                    </div>
                                 })}
                              </div>
                           )}
                        </ImageUploading>
                        <button
                           className='category-add-btn'
                           onClick={() => {
                              if (parentId !== null && CategoryValue.trim() !== "" && images.length == 1) {
                                 dispatch(PostGenderCategory({ name: CategoryValue, parentId: parentId, categoryImg: img })).then(() => {
                                    dispatch(GetGenderCategory())
                                    dispatch(CloseCategoryItem(!delcategory))
                                    setParentId(null)
                                    setChooseBtnMan("grey")
                                    setChooseBtnWoman("grey")
                                    setCategoryValue("")
                                    setImages([])
                                 })
                              } else {
                                 alert("Select_All")
                              }
                           }
                           }>
                           Добавить
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         ) : undefined}
      </div>
   )
}
