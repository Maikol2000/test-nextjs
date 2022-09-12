import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProductId() {
  const router = useRouter()
  
  return (
    <div>Product Detail {router.query.productId}</div>
  )
}
