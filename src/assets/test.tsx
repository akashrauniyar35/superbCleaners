import React from 'react';

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
    // const Title: FC<TitleProps> = ({ title, subtitle }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </>
    );
};

export default Title;