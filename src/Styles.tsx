import styled from 'styled-components';

export const BasicButton = styled.button`
    position: relative;
    background-color: #444;
    font-size: 16px;
    color: #fff;
    padding: 5px 10px;
    width: 80px;
    text-align: center;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    border-radius: 25px;
    border: 2px solid #aaa; 

    &:disabled {
        cursor: auto;
        background-color: #999;
        color: #ddd;
    }
`;