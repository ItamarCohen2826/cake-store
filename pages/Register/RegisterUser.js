import styles from '../../styles/LoginPage.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import client from '../../apolloclient';
import { gql, useMutation } from '@apollo/client';


export default function RegisterPage() {
    // const usernameElement = document.getElementById('username');
    // const passwordElement = document.getElementById('password');
    const REGISTER_MUTATION = gql`
    mutation Register
    (
        $email: String!
        $password: String!
        $name: String!
        $usertype: UserT!
    ) {
        registerUser(input: {name: $name, email: $email, usertype: $usertype, password: $password}) {
          jwt
        }
      }
      
    `;
    const [login, { data, loading, error }] = useMutation(REGISTER_MUTATION);

    let input;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        login({ variables: { email: email, password: password, usertype: usertype } })
        console.log(username);
        console.log(password);
        if (loading) return 'Submitting...';
        if (error) return `Submission error! ${error.message}`;
        console.log(data);
    };
    return (
<div className="w-full max-w-xs">
  <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} method="post">
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='username' type="text" placeholder="Username" onChange={(e) => {
        setUsername(e.target.value)
      }} />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="text" placeholder="Email" onChange={(e) => {
        setEmail(e.target.value)
      }} />
    </div>
    <div className="mb-6">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******************" onChange={(e) => {
        setPassword(e.target.value)
      }} />
    </div>
    <div>
        <select className="shadow appearance-none border border-red-500 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
            <option value='SUPPLIER' onSelect={() => {setUsertype('SUPPLIER')}}>supplier</option>
            <option value='CUSTOMER' onSelect={() => {setUsertype('CUSTOMER')}}>customer</option>
        </select>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Register
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2022 Itamar Cohen. All rights reserved.
  </p>
</div>
    )
}