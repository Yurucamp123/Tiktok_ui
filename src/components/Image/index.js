import { useState, forwardRef } from 'react';
import images from '~/assess/img';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const Image = forwardRef(
    ({ fallBack: customFallBack = images.noImage, className, onError, src, alt, ...props }, ref) => {
        const [fallBack, setFallBack] = useState('');

        const handleError = () => {
            setFallBack(customFallBack);
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                onError={handleError}
                alt={alt}
                src={fallBack || src}
                {...props}
                ref={ref}
            />
        );
    },
);

Image.propTypes = {
    fallBack: PropTypes.string,
    className: PropTypes.string,
    onError: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
