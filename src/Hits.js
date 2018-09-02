import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connectHits } from 'react-instantsearch-core';


const Hits = ({ hits, className, hitComponent: HitComponent }) => (
    // Spread the hit on HitComponent instead of passing the full object. BC.
    // ex: <HitComponent {...hit} key={hit.objectID} />
        {hits.map(hit => (
                <HitComponent hit={hit} key={hit.objectID} />
        ))}
);

Hits.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
    hitComponent: PropTypes.func,
};

Hits.defaultProps = {
    className: '',
    hitComponent: props => (
        <div
            style={{
                borderBottom: '1px solid #bbb',
                paddingBottom: '5px',
                marginBottom: '5px',
                wordBreak: 'break-all',
            }}
        >
            {JSON.stringify(props).slice(0, 100)}
            ...
    </div>
    ),
};

export default connectHits(Hits);