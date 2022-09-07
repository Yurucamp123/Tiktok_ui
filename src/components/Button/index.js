import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    primary,
    outline,
    text,
    blackOutline,
    disabled,
    round,
    small,
    large,
    className,
    leftIcon,
    rightIcon,
    ...passprops
}) {
    let Component = 'button';

    const props = {
        onClick,
        ...passprops,
    };

    // delete event

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        // button style
        primary,
        outline,
        blackOutline,
        text,
        disabled,
        round,
        leftIcon,
        rightIcon,
        // button size
        small,
        large,
        [className]: className,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <div className={cx('title')}>{children}</div>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
