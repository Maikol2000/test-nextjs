import Link from "next/link";

export default function AboutDetail({ about }) {
  console.log({ about });
  return (
    <div>
      <p>{about.slug}</p>
      <Link href={"/blog"}>Back</Link>
    </div>
  );
}

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

  const paths = data.data.map((post) => {
    return {
      params: {
        slug: post.slug.split("/")[1],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  const options = {
    method: "POST",
    headers: {
      "X-Tenant-UniqueId": "6D659B8D-FD45-4D93-80CB-A856AE7388AA",
    },
    body: { slug: JSON.stringify(slug) },
  };

  const resp = await fetch(
    "https://api-test.erm1.com/cms/blog/articles",
    options
  );
  const data = await resp.json();

  return {
    props: {
      about: data,
    },
  };
};
