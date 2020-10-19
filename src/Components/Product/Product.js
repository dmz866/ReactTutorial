import React from 'react';
import { useParams } from 'react-router-dom';
import defaultImageUrl from '../../Samples/defaultImage.png';

export const Product = ({ image, name, price }) => {
    const imageUrl = image && image.url;
    const { id } = useParams();
    console.count('product');

    return (
        <div>
            <h1>{name}</h1>
            <img style={{ width: 100 }} src={imageUrl || defaultImageUrl} alt={name} />
            <div>{price || 'No Price'}</div>
            <hr />
        </div>
    )
};