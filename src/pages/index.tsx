import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Price from './pricing'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Price />
  )
}
