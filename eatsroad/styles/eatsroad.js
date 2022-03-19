import styled from "@emotion/styled"

export const Container = styled.div`
    width: 640px;
    height: 1138px;
    background-image: url("/shaian-ramesht-exSEmuA7R7k-unsplash.jpg");
    background-size: cover;
`;

export const Wrap = styled.div`
padding: 224px 50px 0 50px;
    width: 640px;
    height: 1138px;
    background-color: rgba(0,0,0,0.55);

    `
export const Header = styled.div`
position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const LocationImg = styled.img`
    width: 100px;
    height: 100px;
    `
export const Bar = styled.div`
    position: absolute;
    top: 83px;
    width: 50px;
    height: 15px;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.5);
`;
export const Title = styled.div`
    color: white;
    font-size: 60px;
    text-align: center;
    font-weight: 600;
    `

export const User = styled.div`
    padding-top: 140px;
    `
export const EmailBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    `
export const Email = styled.input`
    width: 500px;
    height: 50px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom-color: rgba(255,255,255,0.5);
    background: none;
    font-size: 24px;
    color: white;
`;
export const Error = styled.div`
    padding: 7px 0 0 13px;
    color: rgba(255, 27, 109, 0.7);
    font-size: 18px;
    font-weight: 600;
    `;
export const DeleteImg = styled.img`
    width: 20px;
    height: 20px;
    `
export const PasswordBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
`;
export const Password = styled.input`
    width: 500px;
    height: 50px;
    border-top: 0;
    border-left: 0;
    border-right: 0ch;
    border-bottom-color: rgba(255, 255, 255, 0.5);
    background: none;
    font-size: 24px;
    color: white;
`;
export const LoginBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 540px;
    height: 76px;
    border-radius: 38px;
    color: white;
    font-weight: 700;
    font-size: 26px;
    border: none;
    background-color: rgba(255, 27, 109, 0.6);
    cursor: pointer;
`;
export const LabelBox = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;


    `
export const Label = styled.div`
    color: white;
    font-size: 20px;
`;
export const LabelDiv = styled.div`
    width: 1px;
    height: 12px;
    background-color: rgba(255,255,255,0.5);
    `
export const KakaoBox = styled.div`
    margin-top: 50px;
    width: 540px;
    height: 76px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255,214,0,0.55);
    border-radius: 38px;
`;
export const KakaoImg= styled.img`
    width: 28px;
    `
export const KakaoText = styled.div`
    color: #fae100;
    padding-left: 20px;
    font-size: 26px;
    font-weight: 700;
`;