import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const dfChange = () => {};

function Menu({ children, items = [], onChange = dfChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                    key={index}
                    data={item}
                />
            );
        });
    };

    return (
        <Tippy
            delay={[200, 200]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                                title="Languages"
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            interactive
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            offset={[8, 12]}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
