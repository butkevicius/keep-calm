import React from 'react';
import data from '../../../../common/data';

const FontSelector = ({ value, onSelect }) => (
    <select value={value} onChange={onSelect} style={{ fontFamily: value }} className="FontSelector">
        {data.fonts.availableFonts.map((f, i) => <optgroup style={{ fontFamily: f }}><option key={i}
                                                                   value={f}>{f}</option></optgroup>)}
    </select>
);

FontSelector.propTypes = {
    value: React.PropTypes.string,
    onSelect: React.PropTypes.func
};


export default FontSelector;
