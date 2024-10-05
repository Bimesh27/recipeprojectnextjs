import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex min-h-screen min-w-full justify-center items-center'>
        <Skeleton/>
    </div>
  )
}

export default Loading