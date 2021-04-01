import React from 'react';
import Image from 'react-bootstrap/Image';

const SelectedHikePhoto = ({ selectedHikePhotosArr }) => {
    return (
        <React.Fragment>
            {selectedHikePhotosArr.map((photoObj) => (
                <Image  key={photoObj.crops[0].url} src={photoObj.crops[0].url} fluid />
            ))}
        </React.Fragment>
    )
}

export default SelectedHikePhoto;