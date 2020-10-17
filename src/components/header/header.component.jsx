import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.style.css'
import logo from '../../assets/amazon_PNG25.png'

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' 
                    src={logo} 
                    alt='Amazon'/>  

            <div className='header__search'>
                <input className='header__search__input' type='text' />
                <SearchIcon className='header__search__icon' />
            </div>

            <div className='header__nav'>
                
                <div className='header__nav__option'>
                    <span className='header__nav__option_lineOne'>
                        Hello Guest
                    </span>
                    <span className='header__nav__option_lineTwo'>
                        Sign In
                    </span>
                </div>

                <div className='header__nav__option'>
                    <span className='header__nav__option_lineOne'>
                        Returns
                    </span>
                    <span className='header__nav__option_lineTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header__nav__option'>
                    <span className='header__nav__option_lineOne'>
                        Your
                    </span>
                    <span className='header__nav__option_lineTwo'>
                        Prime
                    </span>
                </div>
                <div className='header__nav__option_basket'>
                    <ShoppingBasketIcon />
                    <span className='header__nav__option_lineTwo header__basketCount'>0</span>
                </div>
            </div>

        </div>
        
    )
}

export default Header
