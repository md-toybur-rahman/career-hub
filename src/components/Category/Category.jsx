import React from 'react';

const Category = ({category}) => {
    const {picture, name, job} = category;
    return (
        <div>
            <img src={picture} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Category;