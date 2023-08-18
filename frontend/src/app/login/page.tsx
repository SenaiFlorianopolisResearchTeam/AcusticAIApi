import type { Metadata } from 'next'
import Login from './Login'
 
export const metadata: Metadata = {
  title: 'AcustticAI - Login',
  description: '...',
}

export default function Page(){
  return <><Login/></>
 }