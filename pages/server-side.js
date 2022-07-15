// pages/server-side.js
import { ApolloProvider, gql, useMutation } from '@apollo/client';
import client from '../apolloclient';

const name = "itamarcohen2826";
const email = "itamar@asd.com";
const password = "coolcool";
/* export function getServerSideProps() {
    return {
        props: {
            data: registerUser(name, email, password),
          },
        };
    } */
const REGISTER_USER = gql`
    mutation Register {
        registerUser(input: {name: "", email: "", usertype: SUPPLIER, password: ""}) {
          jwt
        }
    }
    `
const Register = () => {
    let input;
    const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    
  
    return (
            <div>
            <button onClick={registerUser({ variables: { name: name, email: email, password: password } })}>Register</button>
            {loading ? data : loading}
            </div>
    )
}

export default Register;