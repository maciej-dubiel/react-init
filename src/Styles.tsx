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

    &:after {
        content: "";
        background: #f1f1f1;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px !important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s    
        }

    &:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }
`;