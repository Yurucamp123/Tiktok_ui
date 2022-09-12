import './GlobalStyle.scss';
import PropTypes from 'prop-types';

function GlobalStyle({ children }) {
    return children;
}

export default GlobalStyle;

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,
};
