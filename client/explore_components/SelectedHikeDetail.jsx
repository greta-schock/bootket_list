import React from 'react';

const SelectedHikeDetail = ({selectedHikeInfo}) => {
    return (
        <React.Fragment>
            <div>{selectedHikeInfo.title}</div>
            <div>{selectedHikeInfo.accessibilityInformation}</div>
            <div>{selectedHikeInfo.arePetsPermitted}</div>
            <div>{selectedHikeInfo.arePetsPermittedWithRestrictions}</div>
            <div>{selectedHikeInfo.duration}</div>
            <div>{selectedHikeInfo.durationDescription}</div>
            <div>{selectedHikeInfo.shortDescription}</div>
            <div></div>
        </React.Fragment>
    )
}

export default SelectedHikeDetail;