import BlogList from "../../components/blogList";
import React from "react";
import { GetServerSideProps } from "next";

export default function Blog({ blogList }) {
  return (
    <div>
      <BlogList blogList={blogList} />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const resp = await fetch(
//     "https://api-test.erm1.com/cms/blog/articles?pageIndex=0&pageSize=10",
//     {
//       headers: {
//         "X-SysTenant-UniqueId": "6D659B8D-FD45-4D93-80CB-A856AE7388AA",
//       },
//     }
//   );
//   const data = await resp.json();

//   return {
//     props: {
//       blogList: data.data,
//     },
//     // sau 10s thì bên client mới nhận được request mới
//     revalidate: 10,
//   };
// };

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const resp = await fetch(
    "https://api-test.erm1.com/cms/blog/articles?pageIndex=0&pageSize=10",
    {
      headers: {
        "X-SysTenant-UniqueId": "6D659B8D-FD45-4D93-80CB-A856AE7388AA",
      },
    }
  );
  const data = await resp.json();

  return {
    props: {
      blogList: data.data,
    },
  };
};
