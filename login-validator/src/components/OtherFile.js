import React, {Component} from 'react';
import PropTypes from 'prop-types';

const OtherFile= ({ componentName = "James" }) => {
    return (
        <div>
            A new component named {componentName}
        </div>
    );
}

OtherFile.propTypes = {};

export default OtherFile;
