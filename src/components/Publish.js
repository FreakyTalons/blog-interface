import React, { useState } from 'react';
import idea from '../assets/idea.png'
import bitcoin from "../assets/bitcoin.png"
import link from "../assets/link.png"
import moneyBag from "../assets/money-bag.png"
import moon from "../assets/moon.png"

export default function Publish ({handlePublishBlog}){
    const [prevDeets, setPrevDeets] = useState({
        prevImg : "",
        title : "",
        subtitle : "",
        tag : ""
    })

    const handleChange = (event) =>
    {
        const {name, value} = event.target;
        setPrevDeets((prevValue) => {
            return {...prevValue, [name]:value}
        })
    }
    
    const handlePublishClick = () =>
    {
        handlePublishBlog(prevDeets)
    }

    const setTag0 = () => {
        setPrevDeets((prevValue) => {
            return {...prevValue, tag:"Blockchain"}
        })
    }

    const setTag1 = () => {
        setPrevDeets((prevValue) => {
            return {...prevValue, tag:"Metaverse"}
        })
    }

    const setTag2 = () => {
        setPrevDeets((prevValue) => {
            return {...prevValue, tag:"NFTs"}
        })
    }

    const setTag3 = () => {
        setPrevDeets((prevValue) => {
            return {...prevValue, tag:"Trading"}
        })
    }

    const setTag4 = () => {
        setPrevDeets((prevValue) => {
            return {...prevValue, tag:"Cryptocurrencies"}
        })
    }
    //{color: "#292930", border: "2px solid #292930"}
    return(
        <div className='Publish--div'>
        <div className='story--prev'>
            {prevDeets.prevImg === ""?<div className='img--upload'><i className="main--customIcon fa-solid fa-link fa-2x"></i><p>Enter Preview Image/GIF Link</p></div>:<img src={prevDeets.prevImg}/>}
            <input type="text" onChange={handleChange} name="prevImg" placeholder='Preview Image/GIF link'/>
            <div className='boldText' ><input type="text" placeholder="Write a preview title" value={prevDeets.title} name="title" onChange={handleChange}/></div>
            <input type="text" placeholder="Write a preview subtitle..." value={prevDeets.subtitle} name="subtitle" onChange={handleChange}/>
        </div>
        <div className="tag--select">
            <h2>Select a tag so readers know what your story is about</h2>
            <p>Tag: {prevDeets.tag}</p>
            <div className='tag--options'>
                <div onClick={setTag0}><span><img className="tagImg" src={link}/></span><p className='tagName'>Blockchain</p></div>
                <div onClick={setTag1}><span><img className="tagImg" src={moon}/></span><p className='tagName'>Metaverse</p></div>
                <div onClick={setTag2}><span><img className="tagImg" src={idea}/></span><p className='tagName'>NFTs</p></div>
                <div onClick={setTag3}><span><img className="tagImg" src={moneyBag}/></span><p className='tagName'>Trading</p></div>
                <div onClick={setTag4}><span><img className="tagImg" src={bitcoin}/></span><p className='tagName'>Cryptocurrencies</p></div>
            </div>
            <button className='bt' onClick={handlePublishClick}>Publish Now</button>
        </div>
        </div>
    )

}