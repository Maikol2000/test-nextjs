import { useRouter } from 'next/router'
import React from 'react'

export default function Review() {
    const router = useRouter()

    const {productId, reviewId} = router.query
  return (
    <div>Review {reviewId}, product {productId}</div>
  )
}
