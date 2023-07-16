import { SearchBarJobsHub } from '@/components'
import React, { Children } from 'react'

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
  return (
    <div>
        <SearchBarJobsHub/>
        {children}
    </div>
  )
}

export default layout