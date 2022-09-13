import { useRouter } from 'next/router'
import React from 'react'

export default function Params() {
  const router =  useRouter()
  const {pageIndex,pageSize} =  router.query
  
  return (
    <div>params page index {pageIndex}, pageSize {pageSize}</div>
  )
}
