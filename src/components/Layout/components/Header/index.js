import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!

import { useState } from 'react';
import { PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assess/img';
import AccountItems from '~/components/AccountItems';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/">
                    <img alt="tiktok" src={images.logo} />
                </a>

                <Tippy
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-heading')}>Accounts</h4>

                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                    visible={searchResults.length > 0}
                    interactive
                >
                    <div className={cx('search')}>
                        <input spellCheck={false} type="text" placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        {/* loading */}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button blackOutline leftIcon={<FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>

                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
