import styled from "styled-components";

export const Container = styled.section`
    padding: 5rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    svg {
        position: absolute;
        left: 20px;
        top: 20px;
        cursor: pointer;
    }

    h1 {
        align-self: center;
        font-size: 3rem;
    }

    h2 {
        color: red;
        font-size: 2rem;

    }

    li {
        margin-left: 3rem;
        font-size: 1.5rem;
    }
`