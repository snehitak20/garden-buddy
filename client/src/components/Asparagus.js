import React from 'react';
import '../pages/styles/guides.css';
import { Link } from 'react-router-dom';
import asparagus from '../pages/images/asparagus.jpg';
import tomatoesLeft from '../pages/images/tomatoes-left.png';
import tomatoesRight from '../pages/images/tomatoes-right.png';
import butterflyLeft from '../pages/images/butterfly-left.png';
import butterflyRight from '../pages/images/butterfly-right.png';

export default function Asparagus() {
    return (
            <>
            <div className='guide-wrap'>
                <img src={tomatoesLeft} alt="tomatoes" className='tomatoes'/>
                <div className='title-wrap-guides'>
                    <img src={butterflyLeft} alt="butterfly" className='butterfly'/>
                    <h1 className='guides-title font-title'>Grow Guides</h1>
                    <img src={butterflyRight} alt="butterfly" className='butterfly'/>
                </div>
                <img src={tomatoesRight} alt="tomatoes" className='tomatoes'/>
            </div>
            <h2 className='veggie-title'>Asparagus</h2>
            <div className='content-wrap'>
            <div className='list-wrap'>
                    <ul className='veggie-list'> 
                        <h2 className='list-title'>Vegetables</h2>  
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Asparagus'>Asparagus</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Beets'>Beets</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Carrots'>Carrots</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Eggplants'>Eggplants</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Tomatoes'>Tomatoes</Link>
                        </li>
                    </ul>
                </div>
                <div className='guide-wrap'>
                    <div className='detail-wrap'>
                        <ul className='detail-list'>
                            <label className='detail-label'>Sun Exposure</label>
                            <li className='detail'>
                                Full Sun
                            </li>
                            <label className='detail-label'>Soil pH</label>
                            <li className='detail'>
                                Neutral-Slightly acidic
                            </li>
                            <label className='detail-label'>Bloom Time</label>
                            <li className='detail'>
                                Summer, Fall
                            </li>
                            <label className='detail-label'>Days to Harvest</label>
                            <li className='detail'>
                                3 years
                            </li>
                            <label className='detail-label'>Recommended Start</label>
                            <li className='detail'>
                                Outdoors
                            </li>
                            <label className='detail-label'>Seed Depth</label>
                            <li className='detail'>
                                6"
                            </li>
                        </ul>
                    </div>
                    <div className='description-wrap'>
                        <img className='asparagus-img' src={asparagus} alt='tomato plant'></img>
                        <p className='description'>
                            Asparagus can be used for a variety of things. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
