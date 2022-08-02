import React from 'react'

const DummyData = () => {
    let td = [];

    const _rand = (min, max) => {
        return Math.floor(min + Math.random() * (max - min + 1));
    }

    const props = {
        price: _rand(100, 400),
        location: ['USA', 'Mexico'][_rand(0, 1)],
        imageId: [_rand(1, 3)],
        description: 'Lorem ipsum dolor sit, amet consectetur.',
        stats: {
            score: _rand(1, 5),
            reviewCount: _rand(10, 205)
        },
        statusLabel: ['Sold out', 'In stock'][_rand(0, 1)],
    }

    return props;
}

export default DummyData;