import { useRouter } from "next/router";
import React from "react";

export default function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  const style = {
    color: router.asPath.reviewId === '1' ? 'red' : 'pink',
  }

  return (
    <div className={style}>
      Review {reviewId}, product {productId}
    </div>
  );
}
