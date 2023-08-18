import type { Metadata } from 'next'
import Dashboard from './Dashboard'
 
export const metadata: Metadata = {
  title: 'AcustticAI - Dashboard',
  description: '...',
}

export default function Page(){
  return <><Dashboard/></>
 }