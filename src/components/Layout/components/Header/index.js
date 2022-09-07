import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faKeyboard, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowRightFromBracket,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faInbox,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { useState } from 'react';
import { PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import images from '~/assess/img';
import AccountItems from '~/components/AccountItems';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: 'Languages',
            data: [
                { type: 'language', code: 'eng', title: 'English' },
                { type: 'language', code: 'vn', title: 'Vietnamese' },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedback',
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                {
                }
                break;
            default:
        }
    };

    const currentUser = true;

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    }, []);

    const userMenu = [
        {
            title: 'View Profile',
            icon: <FontAwesomeIcon icon={faUser} />,
            to: '/@profile',
        },
        {
            title: 'Get coins',
            icon: <FontAwesomeIcon icon={faCoins} />,
            to: '/coins',
        },
        {
            title: 'Settings',
            icon: <FontAwesomeIcon icon={faGear} />,
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            title: 'Log out',
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            to: '/Logout',
            seperate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/">
                    <img alt="tiktok" src={images.logo} />
                </a>

                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                blackOutline
                                leftIcon={<FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />}
                            >
                                Upload
                            </Button>

                            <Tippy delay={[200, 200]} trigger="click" content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                            <Tippy delay={[200, 200]} trigger="click" content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faInbox} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                blackOutline
                                leftIcon={<FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />}
                            >
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                alt="your avatar"
                                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/304889856_436434238514959_7546450680393731823_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HzQYnrcMtucAX_fhGzr&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-jO4fgbpKuqb2YFc_RrF4fv34lDw1mVVkjHwhwOGQN1g&oe=631D6061"
                            />
                        ) : (
                            <button className={cx('menu-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
