import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const resp = await fetch(
    "https://api-test.erm1.com/cms/blog/articles?pageIndex=0&pageSize=10",
    {
      headers: {
        "X-SysTenant-UniqueId": "6D659B8D-FD45-4D93-80CB-A856AE7388AA",
      },
    }
  );

  const data = await resp.json();

  // const paths = data.data.map((post) => {
  //   return {
  //     params: {
  //       slug: post.slug.split("/")[1],
  //     },
  //   };
  // });

  // fallback = true khi sử lý nhiều data, cải thiện tốc độ load trang
  return {
    paths: [
      {
        params: {
          slug: "/about-us",
        },
      },
    ],
    fallback: true,
  };

  // fallback false khi sử lý ít data và ko cần default data, nó sẽ tự redirect page 404.
  // return {
  //   paths,
  //   fallback: false,
  // };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "X-SysTenant-UniqueId": "6D659B8D-FD45-4D93-80CB-A856AE7388AA",
    },
    body: JSON.stringify({ slug: `/${slug}` }),
  };

  const resp = await fetch(
    "https://api-test.erm1.com/cms/blog/articles",
    options
  );

  const data = await resp.json();

  // khi ko thì thấy data sẽ đẩy ra page 404. Sử dụng khi fallback = true
  if (!data.data?.slug) {
    return {
      notFound: true,
    };
  }
  // truyền data thông qua props cho component
  return {
    props: {
      about: data,
    },
    // sau 10s thì bên client site mới nhận được request mới, trong lúc đó ng dùng ko thể tương tác với ui
    revalidate: 10,
  };
};

export default function AboutDetail({ about }) {
  const router = useRouter();
  const data = about?.data;

  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <p>{data?.slug}</p>
      <Link href={"/blog"}>Back</Link>
    </div>
  );
}
