import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { request } from "@/lib/datocms";

import { GET_PAGE } from "@/lib/queries";

const Home = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(page);
  return (
    <>
      <div>
        <h1>Next Project Starter</h1>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{ page: any }> = async ({
  params,
}) => {
  const { homePage } = (await request({
    query: GET_PAGE,
    variables: { slug: params?.page },
  })) as any;

  return {
    props: { page: homePage },
    revalidate: 60,
  };
};
