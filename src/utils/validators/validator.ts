import React from 'react';

export const required = (value: string) => {
    if (!value) return 'field is required'
    return undefined
};


export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `max length ${maxLength} symbols`
    return undefined
};