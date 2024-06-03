import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    background-color: var(--verde_claro);
    box-shadow: 1px 6px 15px -1px rgba(0, 0, 0, 0.23);
    padding: 1rem;
`;

export const SearchBar = styled.input`
    border: 1px solid var(--cafe_oscuro);
    border-radius: 30px;
    background-color: var(--beige_claro);
    box-shadow: -1px 0px 11px 0px rgba(0, 0, 0, 0.19);
    margin-right: 0.5rem;
`;

export const LoginButton = styled.button`
    background-color: var(--verde_oscuro);
    color: var(--beige_claro);
    border: 1px solid var(--beige_claro);
    margin-right: 0.5rem;

    &:hover {
        background-color: var(--verde_oscuro);
        color: var(--beige_claro);
        border: 1px solid var(--beige_claro);
    }
`;

export const RegisterButton = styled.button`
    background-color: var(--beige_claro);
    color: var(--verde_oscuro);
    border: 1px solid var(--verde_oscuro);

    &:hover {
        background-color: var(--beige_claro);
        color: var(--verde_oscuro);
        border: 1px solid var(--verde_oscuro);
    }
`;
