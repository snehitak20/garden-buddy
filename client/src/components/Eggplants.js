import React from 'react';
import './styles/guides.css';
import { Link } from 'react-router-dom';
import eggplant from '../pages/images/eggplant.jpg';

export default function Eggplants() {
    return (
            <>
            <h1 className='page-title'>Growing Guides</h1>
            <h2 className='veggie-title'>Eggplant</h2>
            <div className='content-wrap'>
            <div className='list-wrap'>
                    <ul className='veggie-list'> 
                        <h2 className='list-title'>Vegetables</h2>  
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides/Asparagus'>Asparagus</Link>
                        </li>
                        <li className='veggie'>
                            <Link className='veggie-link' to='/guides//Beets'>Beets</Link>
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
                                Acidic-Neutral
                            </li>
                            <label className='detail-label'>Bloom Time</label>
                            <li className='detail'>
                                Summer
                            </li>
                            <label className='detail-label'>Days to Harvest</label>
                            <li className='detail'>
                                60-100
                            </li>
                            <label className='detail-label'>Recommended Start</label>
                            <li className='detail'>
                                Indoors
                            </li>
                            <label className='detail-label'>Seed Depth</label>
                            <li className='detail'>
                                1/2"
                            </li>
                        </ul>
                    </div>
                    <div className='description-wrap'>
                        <img className='veggie-img' src={eggplant} alt='tomato plant'></img>
                        <p className='description'>
                            THSSI ISHI HDIHF OSDHFDO ISHF ODIHFSDOIF HDOIHDFO IHFDOID FHODISF. THSS IISH IHD IHFO SDHFDO ISH FODIHFSDOIF HDOIH DFOIH FDOID FHODI SF.THSSIIS HIHD IHFOS DHFDOI SHF ODIHFS DOIFHD OIHDFOI HFDOIDF HODISF. THSSII SHIHD IHFOSD HFDOI SHFODI HFSDO IFHDOI HDFOI HFDOID FHOD ISF.THSSI ISHI HDIH FOSDH FDOISH FODIHF SDOIFH DOIH DFOIHF DOIDFHOD ISF. THSSI ISH IHDIH FOSDHF DOIS HFODIH FSDOIFHD OIHD FOIHFDO IDFHO DISF.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
