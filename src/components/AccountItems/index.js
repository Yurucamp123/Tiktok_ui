import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1665757201241090~c5_300x300.webp?x-expires=1662548400&x-signature=33aymB%2FQpWhc5qz1y6YIBeV2PBQ%3D"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <div>
                    <h4 className={cx('name')}>SonDn</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <span className={cx('username')}>Sondn1234</span>
            </div>
        </div>
    );
}

export default AccountItems;
