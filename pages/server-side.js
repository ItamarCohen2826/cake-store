// pages/server-side.js
import { ApolloProvider, gql, useMutation } from '@apollo/client';
import client from '../apolloclient';

const name = "itamar";
const email = "itamar_cohen@outlook.com";
const password = "test1234";
/* export function getServerSideProps() {
    return {
        props: {
            data: registerUser(name, email, password),
          },
        };
    } */
const registerUserMutation = gql`
    mutation Register {
        registerUser(input: {name: "", email: $email, usertype: SUPPLIER, password: ""}) {
          jwt
        }
    }
    `
const Register = () => {
    let input;
    const [registerUser, { data, loading, error }] = useMutation(registerUserMutation);
    registerUser(name, email, password);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
  
    return (
        <ApolloProvider client={client}>
            <div>{loading ? data : loading}</div>
        </ApolloProvider>
    )
}

export default Register;