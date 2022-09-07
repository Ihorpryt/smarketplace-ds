import styled from "styled-components";

export const SLabelGreen = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    background: #ECFDF3;
    color: #027A48;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    padding: 2px 8px;
    border-radius: 24px;
`;

export const SLabelRed = styled(SLabelGreen)`
    background: #FEF3F2;
    color: #B42318;
`;

export const SLabelGrey = styled(SLabelGreen)`
    background: #EAECF0;
    color: #344054;
`;
export const SLabelBlue = styled(SLabelGreen)`
    background: #EFF8FF;
    color: #1D5AC5;
`;
export const SLabelOrange = styled(SLabelGreen)`
    background: #FFFAEB;
    color: #B54708;
`;