import type { Metadata } from 'next'
import Signup from './Signup'
 
export const metadata: Metadata = {
  title: 'AcustticAI - Signup',
  description: '...',
}

export default function Page(){
  return <><Signup/></>
 }