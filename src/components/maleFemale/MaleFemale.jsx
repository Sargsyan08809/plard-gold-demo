import "./filter.css";
import "./products.css"
import "./category.css"
import "./maleFemale.css"
import "./subCategory.css"
import "./prodSlider.css"
import {GetSubCategory} from '../slices/NavSlice';
import {GetMaleFemale} from '../slices/MaleFemaleSlice';
import {GetGenderCategory} from '../slices/GenderCategorySlice';
import {GetProducts, PostProducts} from "../slices/ProductsSlice"
import {useDispatch, useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import React, {useEffect, useState, useRef} from 'react'
import ModalCategory from '../modalCategory/ModalCategory';
import NavModalAdd from '../navModalAdd/NavModalAdd'
import ModalProduct from "../modalProduct/ModalProduct"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import menuImg from './more.png'
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ReactImageUploading from "react-images-uploading";
import imageUploaderPng from "../modalProduct/productImage/imageUpload.png";
import Rotate90DegreesCcwIcon from "@mui/icons-material/Rotate90DegreesCcw";
import goldIcon from "./goldicon.png"
import handIcon from "./hands.jpg"
// swiper
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


export default function MaleFemale() {

	const onChange = (imageList, addUpdateIndex) => {
		setImagessProd(imageList);
	};


	const dispatch = useDispatch()
	const [searchParams, setSearchParams] = useSearchParams()
	const gender = useSelector(state => state.gender.gender)
	const subCategory = useSelector(state => state.subcategory.subcategory)
	const category = useSelector(state => state.category.category)
	const products = useSelector(state => state.products.products)
	const maleFemaleQuery = +searchParams.get("gender");
	const categoryQuery = +searchParams.get("category");
	const subcategoryQuery = +searchParams.get("subcategory");
	const {prodValue} = useSelector(state => state.products)

	useEffect(() => {
		dispatch(GetMaleFemale())
		dispatch(GetGenderCategory())
		dispatch(GetSubCategory())
		dispatch(GetProducts())
	}, [])



	// filter 1
	const [min3, setMin3] = useState(2);
	const [max3, setMax3] = useState(360);
	const [value3, setValue3] = useState([min3, max3]);
	const handleSliderChange3 = (event, newValue) => {
		setValue3(newValue);
		setMin3(newValue[0]);
		setMax3(newValue[1]);
	};
	const handleMinInputChange3 = (event) => {
		let minValue3 = parseInt(event.target.value);
		if (minValue3 >= max3) {
			minValue3 = max3 - 1;
		}
		setMin1(minValue3);
		setValue3([minValue3, max3]);
	};
	const handleMaxInputChange3 = (event) => {
		let maxValue3 = parseInt(event.target.value);
		if (maxValue3 <= min3) {
			maxValue3 = min3 + 1;
		}
		setMax3(maxValue3);
		setValue3([min3, maxValue3]);
	};

	// filter 2
	const [min2, setMin2] = useState(2);
	const [max2, setMax2] = useState(125);
	const [value2, setValue2] = useState([min2, max2]);
	const handleSliderChange2 = (event, newValue) => {
		setValue2(newValue);
		setMin2(newValue[0]);
		setMax2(newValue[1]);
	};
	const handleMinInputChange2 = (event) => {
		let minValue2 = parseInt(event.target.value);
		if (minValue2 >= max2) {
			minValue2 = max2 - 1;
		}
		setMin1(minValue2);
		setValue2([minValue2, max2]);
	};
	const handleMaxInputChange2 = (event) => {
		let maxValue2 = parseInt(event.target.value);
		if (maxValue2 <= min2) {
			maxValue2 = min2 + 1;
		}
		setMax2(maxValue2);
		setValue2([min2, maxValue2]);
	};

	// filter 3
	const [min1, setMin1] = useState(5);
	const [max1, setMax1] = useState(1000);
	const [value1, setValue1] = useState([min1, max1]);
	const handleSliderChange1 = (event, newValue) => {
		setValue1(newValue);
		setMin1(newValue[0]);
		setMax1(newValue[1]);
	};
	const handleMinInputChange1 = (event) => {
		let minValue1 = parseInt(event.target.value);
		if (minValue1 >= max1) {
			minValue1 = max1 - 1;
		}
		setMin1(minValue1);
		setValue1([minValue1, max1]);
	};
	const handleMaxInputChange1 = (event) => {
		let maxValue1 = parseInt(event.target.value);
		if (maxValue1 <= min1) {
			maxValue1 = min1 + 1;
		}
		setMax1(maxValue1);
		setValue1([min1, maxValue1]);
	};

	// filter 4
	const [min, setMin] = useState(10);
	const [max, setMax] = useState(10000);
	const [value, setValue] = useState([min, max]);
	const handleSliderChange = (event, newValue) => {
		setValue(newValue);
		setMin(newValue[0]);
		setMax(newValue[1]);
	};
	const handleMinInputChange = (event) => {
		let minValue = parseInt(event.target.value);
		if (minValue >= max) {
			minValue = max - 1;
		}
		setMin(minValue);
		setValue([minValue, max]);
	};
	const handleMaxInputChange = (event) => {
		let maxValue = parseInt(event.target.value);
		if (maxValue <= min) {
			maxValue = min + 1;
		}
		setMax(maxValue);
		setValue([min, maxValue]);
	};

	const [openFilter, setOpenFilter] = useState(false)
	const [prodMenu, setProdMenu] = useState(false)
	const [openProdMenu, setOpenProdMenu] = useState(0)
	const [editProd, setEditProd] = useState(false)
	const [editedValueProd, setEditedValueProd,] = useState("")
	const [editedPriceProd, setEditedPriceProd,] = useState("")
	const [editedimageProd, setEditedimageProd,] = useState("")
	const [imagessProd, setImagessProd] = useState([]);
	const [imgs, setImgs] = useState({});
	const [saveId, setSaveid] = useState(0)
	const [delOpen, setDelOpen] = useState(false)
	const [getDelId, setGetDelId] = useState(0)
	const [nameForDelete, setNameForDelete] = useState("")
	const [openSliderProducts, setopenSliderProducts] = useState(false)
	const [sliderId, setSliderId] = useState(null)
	const [sliderParentId, setSliderParentId] = useState(null)
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedSubcategory, setSelectedSubcategory] = useState(null);
	const [selectedGender, setSelectedGender] = useState(null);

	const handleCopyClick = () => {
		const textToCopy = '257450612';
		navigator.clipboard.writeText(textToCopy)
			.then(() => {
				console.log('Copied to clipboard:', textToCopy);
			})
			.catch(error => {
				console.error('Unable to copy to clipboard.', error);
			});
	}
	const handleChange = (newValue) => {
		setValue(newValue);
	};
	useEffect(() => {
		setValue([min, max])
	}, [])


	const [min4, setMin4] = useState(0);
	const [max4, setMax4] = useState(6000);
	const [value4, setValue4] = useState([min4, max4]);
	const handleSliderChange4 = (event, newValue) => {
		setValue4(newValue);
		setMin4(newValue[0]);
		setMax4(newValue[1]);
	};
	const handleMinInputChange4 = (event) => {
		let minValue4 = parseInt(event.target.value);
		if (minValue4 >= max4) {
			minValue4 = max4 - 1;
		}
		setMin4(minValue4);
		setValue4([minValue4, max4]);
	};
	const handleMaxInputChange4 = (event) => {
		let maxValue4 = parseInt(event.target.value);
		if (maxValue4 <= min4) {
			maxValue4 = min4 + 1;
		}
		setMax4(maxValue4);
		setValue4([min4, maxValue4]);
	};


	return (<>
		<div className="filter-and-category-box">
			<div className="male-female-category-modal-box">
				{/* maleFemale */}
				<div className='maleFemale'>
					{gender.map(({id, logo}) => {
						return (<div
							style={{
								border: selectedGender === id && "1px solid #9a9a9a",
							}}
							onClick={() => {
								setSearchParams({gender: id});
								setSelectedGender(id);
								setSelectedCategory(null);
							}}
							className='maleFemaleIcons'
							key={id}
						>
							<img
								className='icon'
								src={logo}
								style={{
									filter: selectedGender === id ? 'brightness(100) saturate(0%) hue-rotate(90deg) sepia(0%) invert(100%) contrast(100%)' : 'none', // Adjust icon color to red when selected
								}}
							/>
						</div>);
					})}
				</div>
				{/* category */}
				<div className='categoryCont'>
					{category.map((category) => {
						return category.parentId === maleFemaleQuery && (<div
							key={category.id}
							onClick={() => {
								setSearchParams({gender: maleFemaleQuery, category: category.id});
								setSelectedCategory(category.id);
							}}
							style={{
								border: selectedCategory === category.id && "1px solid #b40000",
							}}
							className={`gender-category-item`}
						>
							<div className='CategoryImg'>
								<img
									className='item-category-img'
									src={category.categoryImg}
									alt={`${category.name}.png`}
								/>
							</div>
							<div className='category-img-name'>{category.name}</div>
						</div>);
					})}
				</div>
				{/* modalCategory */}
				<ModalCategory/>
			</div>
			{/* Sub Category */}
			<div className='nav-parent-box'>
				<nav className='nav-box'>
					<ul className='ul-subCategory'>
						{subCategory.map(({subname, id, parentId}) => {
							return parentId === categoryQuery && (<li
								key={id}
								className='li-subCategory'
								onClick={() => {
									setSearchParams({gender: maleFemaleQuery, category: categoryQuery, subcategory: id});
									setSelectedSubcategory(id);
								}}
								style={{
									borderBottom: id === selectedSubcategory && "3px solid #b40000", // Check if subcategory is selected
								}}
							>
								{subname}
							</li>);
						})}
						<NavModalAdd/>
					</ul>
				</nav>
			</div>
			{/* Products */}
			<div className='products-data-box'>
				<div className='products-data'>
					{products
						.filter((val) => {
							const prodNameMatches = prodValue === "" || val.prodName.toLowerCase().includes(prodValue.toLowerCase());
							const priceInRange = val.price >= value[0] && val.price <= value[1];
							const stonePriceInRange = val.stonePrice >= value4[0] && val.stonePrice <= value4[1];
							return prodNameMatches && priceInRange && stonePriceInRange;
						})
						.map(({id, prodName, price, prodImg, parentId, stonePrice}) => {
							return subcategoryQuery === parentId && (<div
								key={id}
								className='products-item-box'>
								<div className='products-item'>
									<div className='prod-img-box'
											 onClick={() => {
												 setopenSliderProducts(!openSliderProducts)
												 setSliderId(id)
												 setSliderParentId(parentId)
											 }}>
										<img
											className='product-img'
											src={prodImg}
											alt={prodName}
										/>
									</div>
									<div className='prod-type-and-price'>
										<div className="prod-type">
											<p>{prodName}</p>
										</div>
										<div className="prod-price">
											{prodMenu && openProdMenu === id ? (<div className='edit-or-del-prod-box'>
												<div className='prod-delete-or-edit'>
													<DeleteForeverIcon
														className='delProd'
														onClick={(() => {
															setGetDelId(id)
															setDelOpen(!delOpen)
															setNameForDelete(prodName)
														})}
													></DeleteForeverIcon>
												</div>
												<div className='prod-delete-or-edit'>
													<EditCalendarIcon
														className='edit-prod'
														onClick={(() => {
															setEditProd(!editProd)
															setEditedValueProd(prodName)
															setEditedPriceProd(price)
															setEditedimageProd(prodImg)
															setImagessProd([{data_url: prodImg}]);
															setSaveid(id)
														})}
													></EditCalendarIcon>
												</div>
											</div>) : (<p>{price}<span className="dollar">$</span></p>)}
										</div>
										<div
											onClick={(() => {
												setOpenProdMenu(id)
												setProdMenu(!prodMenu)
											})}
											className='edit-and-delete-prod-item'>
											<img className='edit-and-delete-prod-img' src={menuImg}/>
										</div>
									</div>
								</div>
							</div>)
						})}
				</div>
				{openSliderProducts ? (<div
					className="transparent-box"
					onClick={(() => {
						setopenSliderProducts(false)
					})}>
					<div
						className="prod-slider-box"
						onClick={((e) => {
							e.stopPropagation()
						})}>
						<div className="prod-slider-box-top">
							<div className="slider-category"></div>
							<div className="close-slider">
								<div className="close-slider-box" onClick={() => {
									setopenSliderProducts(false)
								}}>
									<CloseIcon className="slidel-close-hover"></CloseIcon>
								</div>
							</div>
						</div>
						<div className="swiper-box-parent">
							<Swiper
								rewind={true}
								navigation={true}
								modules={[Navigation]}
								className="mySwiper">
								{sliderId && subcategoryQuery === sliderParentId && <>
									{products.map(({
																	 id,
																	 prodName,
																	 price,
																	 stoneQuality,
																	 stonePrice,
																	 stoneNumber,
																	 zolotoWeight,
																	 stoneWeight,
																	 uviler,
																	 stoneDiameter,
																	 gram,
																	 stoneCount,
																	 comment,
																	 stoneType,
																	 summa,
																	 prodImg,
																	 zolotoPrice,
																	 parentId,
																	 prodCost,
																	 subcategoryQuery,
																	 crystalNumber,
																	 cristalColor,
																	 zolotoPrevPrice,
																	 robotaCena
																 }) => {
										return subcategoryQuery === parentId && (<SwiperSlide style={{display: "flex"}} key={id}>
											<div className="swiper-into-box">
												<div className="swiper-into-box-left">
													<div className="Swiper-img">
														<img className="swiper-img-box" src={prodImg} alt="Slider img"/>
													</div>
													<div className="sale-btn-box">
														<button>Продать</button>
													</div>
												</div>
												<div className="swiper-into-box-right">
													<div className='swiper-into-box-right2'>
														<div className='obruchalnoe-box'>
															<div className='obruchalnoe-box-left'>
																<div className='obruchalnoe-box-left-img'>
																	<img src={prodImg} alt="image"/>
																</div>
																<div className='obruchalnoe-box-right-mini'>
																	<div className='obruchalnoe-box-right-mini-top'>{prodName}</div>
																	<div className='obruchalnoe-box-right-mini-bottom'>Oбручальное</div>
																</div>
															</div>
															<div className='obruchalnoe-box-right'></div>
														</div>
														<div className='data-for-cost-articul'>
															<div className='data-for-cost-articul-items'>
																<div className='data-for-cost-articul-items-text'>
																	Артикул
																</div>
																<div className='data-for-cost-articul-items-cost1'>{prodName}</div>
															</div>
															<div className='data-for-cost-articul-items'>
																<div className='data-for-cost-articul-items-text'>
																	Цена
																</div>
																<div className='data-for-cost-articul-items-cost2'>{price} $</div>
															</div>
															<div className='data-for-cost-articul-items'>
																<div className='data-for-cost-articul-items-text'>
																	Цена Производства
																</div>
																<div className='data-for-cost-articul-items-cost3'>{stonePrice} $</div>
															</div>
														</div>
														<div className='tag-box'>
															<div className='tag-box-top'>Тег</div>
															<div className='tag-box-btm'>
																<button>Jewellery</button>
																<button>Jewellery</button>
															</div>
														</div>

														{/*table1*/}
														<div className='table-top-box'>
															<div className='table-top-box-top'>
																<div className='table-top-box-top-right'><img src={goldIcon}/><p>Золото</p></div>
																<div className='table-top-box-course'>Курс 520</div>
															</div>
															<table className='table-box'>
																<tr className='tbl-tr'>
																	<td className='tbl-td'>Цвет и Проб</td>
																	<td className='tbl-td'>Нач. Вес</td>
																	<td className='tbl-td'>Вес</td>
																	<td className='tbl-td'>Цена</td>
																</tr>
																<tr className='tbl-tr'>
																	<td className='tbl-td1'>
																		<div style={{background: cristalColor}} className='tbl-td-color'>
																			{crystalNumber}
																		</div>
																	</td>
																	<td className='tbl-td2'>{zolotoPrevPrice}</td>
																	<td className='tbl-td2'>{zolotoWeight}</td>
																	<td className='tbl-td2'>{zolotoPrice}</td>
																</tr>
															</table>
														</div>

														{/*table2*/}
														<div className='table-top-box'>
															<div className='table-top-box-top'>
																<div className='table-top-box-top-right'><img src={handIcon}/><p>Робота</p></div>
																<div className='table-top-box-course'>Курс 520</div>
															</div>
															<table className='table-box'>
																<tr className='tbl-tr'>
																	<td className='tbl-td'>Робота</td>
																	<td className='tbl-td'>Количество</td>
																	<td className='tbl-td'>Цена</td>
																	<td className='tbl-td'>Сумма</td>
																</tr>
																<tr className='tbl-tr'>
																	<td className='tbl-td1'>xxxxxx</td>
																	<td className='tbl-td2'>5</td>
																	<td className='tbl-td2'>{robotaCena}</td>
																	<td className='tbl-td2'>{summa}</td>
																</tr>
															</table>
														</div>

														{/*table3*/}
														<div className='table-top-box'>
															<div className='table-top-box-top'>
																<div className='table-top-box-top-right'><img src={handIcon}/><p>Камни</p></div>
																<div className='table-top-box-course'>Курс 520</div>
															</div>
															<table className='table-box'>
																<tr className='tbl-tr'>
																	<td className='tbl-td'>Качества</td>
																	<td className='tbl-td'>Карат</td>
																	<td className='tbl-td'>Диаметр</td>
																	<td className='tbl-td'>Цена</td>
																	<td className='tbl-td'>GIA</td>
																</tr>
																<tr className='tbl-tr'>
																	<td className='tbl-td2'>{stoneQuality}</td>
																	<td className='tbl-td2'>0.228</td>
																	<td className='tbl-td2'>{stoneDiameter}</td>
																	<td className='tbl-td2'>{stonePrice}</td>
																	<td className='tbl-td-copy'>257450612
																		<div onClick={handleCopyClick} className='copyBox'><ContentCopyIcon
																			fontSize='small'></ContentCopyIcon></div>
																	</td>
																</tr>
															</table>
														</div>


													</div>
												</div>
											</div>
										</SwiperSlide>)
									})}
								</>}
							</Swiper>
						</div>
					</div>
				</div>) : undefined}
				{editProd ? (<div
					onClick={(() => {
						setEditProd(false)
					})}
					className='transparent-box'>
					<div
						className='prod-add-box-edit'
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<div className="prod-add-box2-edit">
							<div className='prod-add-top'>
								<div className="prod-add-top-left">
									<h1 className="prod-add-title">Добавить Изделия</h1>
								</div>
								<div className="prod-add-top-right">
									<div
										onClick={() => {
											setEditProd(false)
										}}
										className='close-prod-add'>
										<CloseIcon></CloseIcon>
									</div>
								</div>
							</div>
							<div className="image-add-and-inps-box">
								<div className="img-parent-box-edit">
									{/* image-uploader */}
									<div className="img-box-edit">
										<div className="img-uploader-box-edit">
											<ReactImageUploading
												value={imagessProd}
												onChange={onChange}
												maxNumber={1}
												dataURLKey="data_url">
												{({
														imageList, onImageUpload, onImageUpdate, onImageRemove, dragProps,
													}) => (<div className="upload-image2">
													{imageList && <button
														className='imgae-uploader2'
														onClick={onImageUpload}
														{...dragProps}
													>
														<img src={imageUploaderPng} alt=""/>
														<p className='Img-upload-text-load2'>Загрузить Фото</p>
													</button>}
													&nbsp;
													{imageList.map((image, index) => {
														image && setImgs(image["data_url"]);
														return <div key={index} className="image-item2">
															<img src={image["data_url"]} width="100"/>
															<div className="image-item-btn-wrapper2">
																<div className='modal-img-remove-update2'>
                                  <span className='update-button2' onClick={() => onImageUpdate(index)}>
                                    <Rotate90DegreesCcwIcon fontSize="small"/>
                                  </span>
																	<span className='remove-button2' onClick={() => onImageRemove(index)}>
                                    <DeleteForeverIcon fontSize="small"/>
                                  </span>
																</div>
															</div>
														</div>
													})}
												</div>)}
											</ReactImageUploading>
										</div>
									</div>
								</div>
								{/* add-articul */}
								<div className="articul-parent-box">
									<div className="prod-add-img-title">Артикул</div>
									<div className="prod-add-img-cost">
										<input
											className="prod-add-inp"
											value={editedValueProd}
											type="text"
											onChange={(e) => {
												setEditedValueProd(e.target.value)
											}}
										/>
									</div>
								</div>
								{/* add-cost */}
								<div className="articul-parent-box">
									<div className="prod-add-img-title2">Цена</div>
									<div className="prod-add-img-cost">
										<input
											className="prod-add-inp"
											value={editedPriceProd}
											type="number"
											onChange={((e) => {
												setEditedPriceProd(e.target.value)
											})}
										/>
									</div>
								</div>
							</div>
							<div className="button-box-edit">
								<button
									onClick={() => {
										if (editedValueProd.trim() !== "" && editedPriceProd !== "") {
											axios.patch("http://localhost:3004/products/" + saveId, {
												prodImg: imagessProd[0].data_url, prodName: editedValueProd, price: editedPriceProd,
											}).then(() => {
												dispatch(GetProducts())
											})
										} else {
											alert("chose")
										}
										setEditedPriceProd("")
										setEditedPriceProd(null)
										setImagessProd([])
										setEditProd(false)
									}}
									className="prod-add-product-edit">Сохранить
								</button>
							</div>
						</div>
					</div>
				</div>) : null}
				{delOpen ? (<div className='transparent-box'
												 onClick={(() => {
													 setDelOpen(false)
												 })}>
					<div className='del-box' onClick={((e) => {
						e.stopPropagation()
					})}>
						<div className='del-box-top'>
							<p>Удалить Одел {nameForDelete}</p>
							<div className='box-del-icon'>
								<CloseIcon className='close-box-icon'
													 onClick={(() => {
														 setDelOpen(false)
													 })}
								></CloseIcon>
							</div>
						</div>
						<div className='text-del-box'>
							Удалить Одел {nameForDelete}
						</div>
						<div className='del-btns-box'>
							<button
								onClick={(() => {
									setDelOpen(false)
								})}
								className='delbtn-1' type="submit">Нет
							</button>
							<button
								onClick={(() => {
									axios.delete(`http://localhost:3004/products/${getDelId}`).then(() => {
										dispatch(GetProducts())
										setDelOpen(false)
									})
								})}
								className='delbtn-2' type="submit">Да
							</button>
						</div>
					</div>
				</div>) : null}
				<ModalProduct/>
			</div>
		</div>

		{/* filter */}
		<div className='filter-box'
				 onClick={(() => {
					 setOpenFilter(!openFilter)
				 })}
				 style={{left: !openFilter ? "0" : "280px"}}>
			<div className='filter-text-and-icon-box'>
				<div className='filter-icon'>
					<FilterAltOutlinedIcon className='filter-icn' fontSize='large'></FilterAltOutlinedIcon>
				</div>
				<div className='filter-text'>
					<p>Ф</p>
					<p>и</p>
					<p>л</p>
					<p>ь</p>
					<p>т</p>
					<p>p</p>
				</div>
			</div>
			<div className='filter-arrow'>{!openFilter ? <ArrowForwardIosIcon fontSize='small'/> : <ArrowBackIosIcon/>}</div>
		</div>
		<div className='range-filter-box' style={{left: !openFilter ? "-300px" : "0"}}>
			<div className='top-filter'>
				<div className="znak-circle">
					<ReportGmailerrorredIcon style={{color: "grey"}}></ReportGmailerrorredIcon>
				</div>
				<div className='data-inps'>
					<input className='data-inps-into' placeholder='Дата' type="text"/>
					<DateRangeIcon fontSize='small' style={{color: "grey"}}></DateRangeIcon>
					<input className='data-inps-into' placeholder='Дата' type="text"/>
					<DateRangeIcon fontSize='small' style={{color: "grey"}}></DateRangeIcon>
				</div>
			</div>
			<div className='filter-inps-parent-box'>

				{/*item 1*/}

				<div className='item-filter-inps-parent-box'>
					<h1 className='filter-price'>Вес Золота </h1>
					<div className='filter-range'>
						<Box sx={{width: 240}}>
							<Slider
								value={value3}
								onChange={handleSliderChange3}
								valueLabelDisplay="auto"
								min={2}
								max={360}
								style={{color: '#C10016'}}
							/>
						</Box>
					</div>
					<div className='price-min-max-box'>
						<div className='min-max'>
							<input
								placeholder='От'
								type="text"
								className='filter-input'
								value={min3}
								onChange={handleMinInputChange3}
								min3={2}
								max3={max3 - 1}
							/>
						</div>
						<div className='min-max-between'>—</div>
						<div className='min-max'>
							<input
								placeholder='До'
								type="text"
								className='filter-input'
								value={max3}
								onChange={handleMaxInputChange3}
								min3={min3 + 1}
								max3={360}
							/>
						</div>
					</div>
				</div>

				{/*item 2*/}

				<div className='item-filter-inps-parent-box'>
					<h1 className='filter-price'>Карат</h1>
					<div className='filter-range'>
						<Box sx={{width: 240}}>
							<Slider
								value={value2}
								onChange={handleSliderChange2}
								valueLabelDisplay="auto"
								min={2}
								max={125}
								style={{color: '#C10016'}}
							/>
						</Box>
					</div>
					<div className='price-min-max-box'>
						<div className='min-max'>
							<input
								placeholder='От'
								type="text"
								className='filter-input'
								value={min2}
								onChange={handleMinInputChange2}
								min2={2}
								max2={max2 - 1}
							/>
						</div>
						<div className='min-max-between'>—</div>
						<div className='min-max'>
							<input
								placeholder='До'
								type="text"
								className='filter-input'
								value={max2}
								onChange={handleMaxInputChange2}
								min2={min2 + 1}
								max2={125}
							/>
						</div>
					</div>
				</div>

				{/*item 3*/}

				<div className='item-filter-inps-parent-box'>
					<h1 className='filter-price'>Цена Производства</h1>
					<div className='filter-range'>
						<Box sx={{width: 240}}>
							<Slider
								value={value4}
								onChange={handleSliderChange4}
								valueLabelDisplay="auto"
								min={0}
								max={6000}
								step={5}
								style={{color: '#C10016'}}
							/>
						</Box>
					</div>
					<div className='price-min-max-box'>
						<div className='min-max'>
							<input
								placeholder='From'
								type="text"
								className='filter-input'
								value={min4}
								onChange={handleMinInputChange4}
								min4={0}
								max4={max4 - 1}
							/>
						</div>
						<div className='min-max-between'>—</div>
						<div className='min-max'>
							<input
								placeholder='To'
								type="text"
								className='filter-input'
								value={max4}
								onChange={handleMaxInputChange4}
								min4={min4 + 1}
								max4={6000}
							/>
						</div>
					</div>
				</div>

				{/*item 4 */}

				<div className='item-filter-inps-parent-box'>
					<h1 className='filter-price'>Цена</h1>
					<div className='filter-range'>
						<Box sx={{width: 200}}>
							<Slider
								value={value}
								onChange={handleSliderChange}
								valueLabelDisplay="auto"
								min={10}
								max={10000}
								style={{color: '#C10016'}}
							/>
						</Box>
					</div>
					<div className='price-min-max-box'>
						<div className='min-max'>
							<input
								type="number"
								className='filter-input'
								value={min}
								onChange={handleMinInputChange}
								min={10}
								max={max - 1}
							/>
						</div>
						<div className='min-max-between'>—</div>
						<div className='min-max'>
							<input
								type="number"
								className='filter-input'
								value={max}
								onChange={handleMaxInputChange}
								min={min + 1}
								max={10000}
							/>
						</div>
					</div>
				</div>


				<div className="filter-btn-box">
					<button
						className="btn-filter"
					>Сохранить
					</button>
				</div>
			</div>
		</div>
	</>)
}