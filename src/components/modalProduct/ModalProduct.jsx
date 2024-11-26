import "./modalProduct.css"
import React, {useEffect, useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux";
import {GetProducts, PostProducts} from "../slices/ProductsSlice";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw';
import imageUploaderPng from "../modalProduct/productImage/imageUpload.png"
import ReactImageUploading from "react-images-uploading";
import {useSearchParams} from "react-router-dom";
import goldIcon from "./productImage/goldicon.png"
import handIcon from "./productImage/hands.jpg"
import Sale from "./productImage/Sale.jpg"
import crystal from './productImage/crystal.jpg'
import {useCollapse} from 'react-collapsed'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';


export default function ModalProduct() {
	const [isExpanded1, setExpanded1] = useState(false);
	const [isExpanded2, setExpanded2] = useState(false);
	const [isExpanded3, setExpanded3] = useState(false);
	const {getCollapseProps: getCollapseProps1, getToggleProps: getToggleProps1} = useCollapse({isExpanded: isExpanded1});
	const {getCollapseProps: getCollapseProps2, getToggleProps: getToggleProps2} = useCollapse({isExpanded: isExpanded2});
	const {getCollapseProps: getCollapseProps3, getToggleProps: getToggleProps3} = useCollapse({isExpanded: isExpanded3});
	const onChange = (imageList, addUpdateIndex) => {
		setImagess(imageList);
	};
	const [searchParams, setSearchParams] = useSearchParams()
	const maleFemaleQuery = +searchParams.get("gender") || "";
	const category = useSelector(state => state.category.category)
	const products = useSelector(state => state.products.products)
	const subCategory = useSelector(state => state.subcategory.subcategory)
	const [imagess, setImagess] = useState([]);
	const [img, setImg] = useState({});
	const dispatch = useDispatch()
	const [prodModal, setProdModal] = useState(false)
	const [prod, setProd] = useState("")
	const [prodCost, setProdCost] = useState("")
	const gender = useSelector(state => state.gender.gender)
	const subcategoryQuery = +searchParams.get("subcategory");
	const categoryQuery = +searchParams.get("category");


	// Золото
	const [cristalColor, setCrystalColor] = useState('')
	const [crystalNumber, setCrystalNumber] = useState(null)
	const [zolotoPrevPrice, setZolotoPrevPrice] = useState(null)
	const [zolotoWeight, setZolotoWeight] = useState(null)
	const [zolotoPrice, setZolotoPrice] = useState(null)

	// Робота
	const [uviler, setUviler] = useState('')
	const [gram, setGram] = useState(null)
	const [robotaCena, setRobotaCena] = useState(null)
	const [summa, setSumma] = useState(null)
	const [comment, setComment] = useState('')

	// Камни
	const [stoneType, setStoneType] = useState('')
	const [stoneCount, setStoneCount] = useState(null)
	const [stoneDiameter, setStoneDiameter] = useState(null)
	const [stoneWeight, setStoneWeight] = useState(null)
	const [stoneQuality, setQuality] = useState(null)
	const [stonePrice, setStonePrice] = useState(null)
	const [stoneNumber, setStoneNumber] = useState(null)

	const [selectedCategory2, setSelectedCategory2] = useState(null);
	const [selectedSubcategory2, setSelectedSubcategory2] = useState(null);
	const [selectedGender2, setSelectedGender2] = useState(null);

	useEffect(() => {
		dispatch(GetProducts())
	}, [dispatch])
	return (<>
		<div
			onClick={() => {
				setProdModal(!prodModal)
			}}
			className='modal-product-box'>
			+
		</div>
		{prodModal ? (<div
			className='transparent-box-scroll'
			onClick={() => {
				setProdModal(!prodModal)
			}}>
			<div
				className='prod-add-box'
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<div className="prod-add-box2">
					<div className='prod-add-top'>
						<div className="prod-add-top-left">
							<h1 className="prod-add-title">Добавить Изделия</h1>
						</div>
						<div className="prod-add-top-right">
							<div
								onClick={() => {
									setProdModal(!prodModal)
								}}
								className='close-prod-add'>
								<CloseIcon></CloseIcon>
							</div>
						</div>
					</div>
					<div className="prod-add-category-box">
						<div className="prod-add-malefemale-category-box">
							<div className="prod-add-malefemale-box">
								{gender.map(({id, logo}) => {
									return (<div
										style={{
											border: selectedGender2 === id && "2px solid #9a9a9a",
										}}
										onClick={() => {
											setSearchParams({gender: id})
											setSelectedGender2(id);
											setSelectedCategory2(null);
										}}
										className='maleFemaleIcons'
										key={id}
									>
										<img
											className='icon'
											src={logo}/>
									</div>)
								})}
							</div>
							<div className="prod-add-category">
								{category.map((category) => {
									const isSelected = (category.id === subcategoryQuery);
									return category.parentId === maleFemaleQuery && (<div
										key={category.id}
										onClick={(() => {
											setSearchParams({gender: maleFemaleQuery, category: category.id})
											setSelectedCategory2(category.id);
										})

										}
										style={{
											border: selectedCategory2 === category.id && "1px solid #b40000",
										}}
										className={`gender-category-item2 ${isSelected ? 'genderSelectedBorder2' : ''}`}>
										<div className='CategoryImg'>
											<img
												className='item-category-img'
												src={category.categoryImg}
												alt={`${category.name}.png`}
											/>
										</div>
										<div className='category-img-name'>
											{category.name}
										</div>
									</div>)

								})}
							</div>
						</div>
						<nav className="prod-add-subCategory">
							<ul className="prod-add-ul">
								{subCategory.map(({subname, id, parentId}) => {
									return parentId === categoryQuery && (<li
										key={id}
										className='prod-add-li2'
										onClick={(() => {
											setSearchParams({gender: maleFemaleQuery, category: categoryQuery, subcategory: id})
											setSelectedSubcategory2(id);
										})}
										style={{
											borderBottom: id === selectedSubcategory2 && "3px solid #b40000",
										}}
									>
										{subname}
									</li>)
								})}
							</ul>
						</nav>
					</div>
					<div className="image-add-and-inps-box">
						<div className="img-parent-box">
							{/* image-uploader */}
							<div className="img-box">
								<div className="img-uploader-box">
									<ReactImageUploading
										value={imagess}
										onChange={onChange}
										maxNumber={1}

										// multiple={4}

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
												image && setImg(image["data_url"]);
												console.log(imageList);
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
								<div className="mini-imgs-box">
									<div className="mini-img">
										<div className="ring-box-close">X</div>
									</div>
									<div className="mini-img">
										<div className="ring-box-close">X</div>
									</div>
									<div className="mini-img">
										<div className="ring-box-close">X</div>
									</div>
									<div className="mini-img">
										<div className="ring-box-close">X</div>
									</div>
								</div>
							</div>
						</div>
						<div className="articul-parent-box">
							<div className="prod-add-img-title2">Цена</div>
							<div className="prod-add-img-cost">
								<input
									className="prod-add-inp"
									value={prodCost}
									type="number"
									onChange={((e) => {
										setProdCost(e.target.value)
									})}
								/>
							</div>
						</div>
						{/* add-articul */}
						<div className="articul-parent-box">
							<div className="prod-add-img-title">Артикул</div>
							<div className="prod-add-img-cost">
								<input
									className="prod-add-inp"
									value={prod}
									type="text"
									onChange={(e) => {
										setProd(e.target.value)
									}}
								/>
							</div>
						</div>
						{/* add-cost */}
					</div>
					<div className='column-box-parent'>
						<div className='gold-choose-box'{...getToggleProps1({
							onDoubleClick: () => setExpanded1((prevExpanded) => !prevExpanded),
						})}>
							<div className='gold-choose-box-left'>
								<img className='gold-icon-img' src={goldIcon}/> Золото
							</div>
							<div className='gold-choose-box-right'>
								<div className='parent-more-box'>
									<p>Курс</p>
									<div
										{...getToggleProps1({
											onClick: () => setExpanded1((prevExpanded) => !prevExpanded),
										})}
									>
										{isExpanded1 ? <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>}
									</div>
								</div>
							</div>
						</div>
						<section className='openinc-sction' {...getCollapseProps1()}>
							<div className='openinc-sction-left'>
								<div className='openinc-sction-left-side'>
									<button onClick={() => {
										setCrystalNumber(925);
										setCrystalColor("grey");
									}}
													className='btn-prob1' type="submit">925
									</button>
									<button onClick={() => {
										setCrystalNumber(999);
										setCrystalColor("gold");
									}} className='btn-prob2' type="submit">999
									</button>
									<button onClick={() => {
										setCrystalNumber(174);
										setCrystalColor("pink");
									}} className='btn-prob3' type="submit">174
									</button>
								</div>
								<div className='openinc-sction-right-side'>
									<button onClick={() => {
										setCrystalNumber(925);
										setCrystalColor("grey");
									}} className='btn-prob1' type="submit">925
									</button>
									<button onClick={() => {
										setCrystalNumber(999);
										setCrystalColor("gold");
									}} className='btn-prob2' type="submit">999
									</button>
									<button onClick={() => {
										setCrystalNumber(174);
										setCrystalColor("pink");
									}} className='btn-prob3' type="submit">174
									</button>
								</div>
							</div>

							<div className='openinc-sction-right'>
								<Box sx={{height: '20px', width: "300px", color: 'black', display: "flex"}}>
									<Input
										value={zolotoPrevPrice}
										onChange={((e) => {
											setZolotoPrevPrice(e.target.value)
										})}
										id="standard-adornment-weight"
										endAdornment={<InputAdornment position="end">Гр</InputAdornment>}
										aria-describedby="standard-weight-helper-text"
										inputProps={{
											'aria-label': '', placeholder: 'Нач.Вес'
										}}
									/>
									<Input
										value={zolotoWeight}
										onChange={((e) => {
											setZolotoWeight(e.target.value)
										})}
										id="standard-adornment-weight"
										endAdornment={<InputAdornment position="end">Гр</InputAdornment>}
										aria-describedby="standard-weight-helper-text"
										inputProps={{
											'aria-label': '', placeholder: 'Вес'
										}}
									/>
									<Input
										value={zolotoPrice}
										onChange={((e) => {
											setZolotoPrice(e.target.value)
										})}
										id="standard-adornment-weight"
										endAdornment={<InputAdornment position="end"></InputAdornment>}
										aria-describedby="standard-weight-helper-text"
										inputProps={{
											'aria-label': '', placeholder: 'Цена'
										}}
									/>
								</Box>
							</div>
						</section>
						<div className='gold-choose-box' {...getToggleProps2({
							onDoubleClick: () => setExpanded2((prevExpanded) => !prevExpanded),
						})}>
							<div className='gold-choose-box-left'>
								<img className='gold-icon-img' src={handIcon}/> Работa
							</div>
							<div className='gold-choose-box-right'>
								<div className='parent-more-box'>
									<p className='cost-green'>0.00 $</p>
									<div
										{...getToggleProps2({
											onClick: () => setExpanded2((prevExpanded) => !prevExpanded),
										})}
									>
										{isExpanded2 ? <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>}
									</div>
								</div>
							</div>
						</div>
						<section className='openinc-sction' {...getCollapseProps2()}>
							<div className='work-box-mini'><Input
								value={uviler} onChange={((e) => {
								setUviler(e.target.value)
							})}
								id="standard-adornment-weight"
								endAdornment={<InputAdornment position="end"></InputAdornment>}
								aria-describedby="standard-weight-helper-text"
								inputProps={{
									'aria-label': '', placeholder: 'Ювелир'
								}}
							/></div>
							<div className='work-box-mini'><Input
								value={gram} onChange={((e) => {
								setGram(e.target.value)
							})}
								id="standard-adornment-weight"
								endAdornment={<InputAdornment position="end"></InputAdornment>}
								aria-describedby="standard-weight-helper-text"
								inputProps={{
									'aria-label': '', placeholder: 'грам/штук'
								}}
							/></div>
							<div className='work-box-mini'><Input
								value={robotaCena} onChange={((e) => {
								setRobotaCena(e.target.value)
							})}
								id="standard-adornment-weight"
								endAdornment={<InputAdornment position="end">$</InputAdornment>}
								aria-describedby="standard-weight-helper-text"
								inputProps={{
									'aria-label': '', placeholder: 'Цена'
								}}
							/></div>
							<div className='work-box-mini'><Input
								value={summa} onChange={((e) => {
								setSumma(e.target.value)
							})}
								id="standard-adornment-weight"
								endAdornment={<InputAdornment position="end">$</InputAdornment>}
								aria-describedby="standard-weight-helper-text"
								inputProps={{
									'aria-label': '', placeholder: 'Сумма'
								}}
							/></div>
							<div className='work-box-mini'><Input
								value={comment} onChange={((e) => {
								setComment(e.target.value)
							})}
								id="standard-adornment-weight"
								endAdornment={<InputAdornment position="end"></InputAdornment>}
								aria-describedby="standard-weight-helper-text"
								inputProps={{
									'aria-label': '', placeholder: 'Коммент'
								}}
							/></div>
						</section>
						<div className='gold-choose-box' {...getToggleProps3({
							onDoubleClick: () => setExpanded3((prevExpanded) => !prevExpanded),
						})}>
							<div className='gold-choose-box-left'>
								<img className='gold-icon-img' src={crystal}/> Камни
							</div>
							<div className='gold-choose-box-right'>
								<div className='parent-more-box'>
									<p className='cost-green'>0.00 $</p>
									<div
										{...getToggleProps3({
											onClick: () => setExpanded3((prevExpanded) => !prevExpanded),
										})}
									>
										{isExpanded3 ? <ExpandLessIcon></ExpandLessIcon> : <ExpandMoreIcon></ExpandMoreIcon>}
									</div>
								</div>
							</div>
						</div>
						<section className='openinc-sction2'{...getCollapseProps3()}>
							<div className='stone-box-mini'>
								<Input
									value={stoneType}
									onChange={((e) => {
										setStoneType(e.target.value)
									})}
									id="standard-adornment-weight"
									endAdornment={<InputAdornment position="end"></InputAdornment>}
									aria-describedby="standard-weight-helper-text"
									inputProps={{
										'aria-label': '', placeholder: 'Тип'
									}}
								/>
							</div>
							<div className='stone-box-mini'>
								<Input
									value={stoneCount}
									onChange={((e) => {
										setStoneCount(e.target.value)
									})}
									id="standard-adornment-weight"
									endAdornment={<InputAdornment position="end"></InputAdornment>}
									aria-describedby="standard-weight-helper-text"
									inputProps={{
										'aria-label': '', placeholder: 'Штук'
									}}
								/></div>
							<div className='stone-box-mini'>
								<Input
									value={stoneDiameter}
									onChange={((e) => {
										setStoneDiameter(e.target.value)
									})}
									id="standard-adornment-weight"
									endAdornment={<InputAdornment position="end">Мм</InputAdornment>}
									aria-describedby="standard-weight-helper-text"
									inputProps={{
										'aria-label': '', placeholder: 'Диаметр'
									}}
								/></div>
							<div className='stone-box-mini'>
								<Input
									value={stoneWeight}
									onChange={((e) => {
										setStoneWeight(e.target.value)
									})}
									id="standard-adornment-weight"
									endAdornment={<InputAdornment position="end">Ct</InputAdornment>}
									aria-describedby="standard-weight-helper-text"
									inputProps={{
										'aria-label': '', placeholder: 'Вес'
									}}
								/></div>
							<div className='stone-box-mini'>
								<Input
									value={stoneQuality}
									onChange={((e) => {
										setQuality(e.target.value)
									})}
									id="standard-adornment-weight"
									endAdornment={<InputAdornment position="end"></InputAdornment>}
									aria-describedby="standard-weight-helper-text"
									inputProps={{
										'aria-label': '', placeholder: 'Качества '
									}}
								/></div>
							<div className='stone-box-mini'>
								<Input
									value={stonePrice}
									onChange={((e) => {
										setStonePrice(e.target.value)
									})}
									id="standard-adornment-weight"
									endAdornment={<InputAdornment position="end"></InputAdornment>}
									aria-describedby="standard-weight-helper-text"
									inputProps={{
										'aria-label': '', placeholder: 'Цена'
									}}
								/></div>
							<div className='stone-box-mini'>
								<Input
									value={stoneNumber}
									onChange={((e) => {
										setStoneNumber(e.target.value)
									})}
									id="standard-adornment-weight"
									endAdornment={<InputAdornment position="end"></InputAdornment>}
									aria-describedby="standard-weight-helper-text"
									inputProps={{
										'aria-label': '', placeholder: 'Номер'
									}}
								/></div>
						</section>
					</div>
					<div className='gold-choose-box'>
						<div className='gold-choose-box-left'>
							<img className='gold-icon-img' src={Sale}/> Цена
						</div>
						<div className='gold-choose-box-right'>
							<div className='parent-more-box'>
								<p className='total-price'>0 $</p>
							</div>
						</div>
					</div>
					<div className="button-box">
						<button
							onClick={() => {
								if (prod.trim() !== "" && prodCost !== "" && imagess.length == 1 && maleFemaleQuery !== "" && subcategoryQuery !== ""
									// && crystalNumber !== "" && cristalColor !== "" && zolotoWeight !== "" && zolotoPrice !== "" && uviler !== "" && gram !== "" && robotaCena !== "" && summa !== "" && comment !== "" && stoneType !== "" && stoneCount !== " " && stoneDiameter !== "" && stoneWeight !== "" && stoneQuality !== "" && stonePrice !== "" && stoneNumber !== ""
								) {
									dispatch(PostProducts({
										prodImg: img,
										prodName: prod,
										price: prodCost,
										parentId: subcategoryQuery,
										crystalNumber: crystalNumber,
										cristalColor: cristalColor,
										zolotoPrevPrice: zolotoPrevPrice,
										zolotoWeight: zolotoWeight,
										zolotoPrice: zolotoPrice,
										uviler: uviler,
										gram: gram,
										robotaCena: robotaCena,
										summa: summa,
										comment: comment,
										stoneType: stoneType,
										stoneCount: stoneCount,
										stoneDiameter: stoneDiameter,
										stoneWeight: stoneWeight,
										stoneQuality: stoneQuality,
										stonePrice: stonePrice,
										stoneNumber: stoneNumber
									})).then(() => {
										dispatch(GetProducts())
										setProdModal(false)
										setProd("")
										setProdCost(null)
										setImagess([])
										setCrystalNumber(null)
										setCrystalColor('')
										setZolotoPrevPrice(null)
										setZolotoWeight(null)
										setZolotoPrice(null)
										setUviler('')
										setGram(null)
										setRobotaCena(null)
										setSumma(null)
										setComment("")
										setStoneType('')
										setStoneCount(null)
										setStoneDiameter(null)
										setStoneWeight(null)
										setQuality(null)
										setStonePrice(null)
										setStoneNumber(null)
									})
								} else {
									alert("Please fill all fields")
								}
							}}
							className="prod-add-product">Добавить
						</button>
					</div>
				</div>
			</div>
		</div>) : null}
	</>)
}
