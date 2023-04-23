import Head from 'next/head'
import { NextPage } from 'next'
import Link from 'next/link'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '@/graphql/mutations'
import { useState } from 'react'

const Signup : NextPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const createUserHandle = async (e:any) => {
    e.preventDefault();
    const result = await createUser({ variables: { username, email, password } });
    console.log(result.data.createUser.message);
  }

  return (
    <>
      <Head>
        <title>AcustticAI - Signup</title>
      </Head>
      <main>
        <div>
          <h1>AcustticAI</h1>
          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <label htmlFor="repeat-password">Repeat Password:</label>
              <input type="password" id="repeat-password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
            </div>
            <Link href="/login">Login</Link>
            <button onClick={(e) => createUserHandle(e)}>Signup</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Signup