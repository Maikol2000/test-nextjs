import Link from "next/link";
import React from "react";

export default function BlogList({ blogList }) {
  return (
    <>
      {blogList?.map((blog, idx) => {
        return (
          <div key={idx}>
            <p>{blog.title}</p>
            <Link href={blog.slug}>{blog.slug}</Link>
            <hr/>
          </div>
        );
      })}
    </>
  );
}
