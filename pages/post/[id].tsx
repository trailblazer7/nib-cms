import { GetServerSideProps } from "next";
import { useEffect } from "react";
import prisma from "@lib/prisma";


const Post = (props:any) => {

    useEffect(() => {
        console.log('Post: ', props)
    }, [props])

    return (
        <div>
            Enter
        </div>
    );
}

// pages/p/[id].tsx
export const getServerSideProps= async ({ params }: any) => {
    const post = await prisma.post.findUnique({
      where: {
        id: String(params?.id),
      },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return {
      props: post,
    };
  };
  

export default Post;