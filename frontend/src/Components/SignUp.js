// src/components/SignUp.js
import React from 'react';
import styled from 'styled-components';

const SignUp = () => (
    <FormStyled>
        <h2>Sign Up</h2>
        <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />
            <button type="submit">Sign Up</button>
        </form>
    </FormStyled>
);

const FormStyled = styled.div`
    background: #fcf6f9;
    padding: 2rem;
    border-radius: 10px;
    width: 400px;
    margin: 2rem auto;

    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        label {
            font-size: 1rem;
            font-weight: 600;
        }

        input {
            padding: 0.8rem;
            font-size: 1rem;
            border-radius: 5px;
            border: 1px solid #ddd;
            outline: none;
        }

        button {
            padding: 1rem;
            background-color: #28a745;
            color: white;
            border: none;
            font-size: 1.2rem;
            font-weight: 600;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;

export default SignUp;