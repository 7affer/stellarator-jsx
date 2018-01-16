import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Button({ children, type, disabled, loading, onButtonClick }) {
	return (
		<button
			className={`Button Button-${type}`}
			disabled={disabled || loading}
			onClick={() => !disabled && onButtonClick()}
		>
			{loading ? 'Loading...' : children}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.oneOf(['primary','secondary','disabled']),
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	onButtonClick: PropTypes.func
};

Button.defaultProps = {
	type: 'primary'
};

export default Button;
