import Header from '../../components/Header'
import { sanityClient } from '../../sanity'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { Post } from '../../typings'

interface Props {
  post: Post
}
const Post = ({ post }: Props) => {
  return (
    <main>
      <Header />
    </main>
  )
}
export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type=="post"]{
  _id,
  slug {
    current
  }
  
}`
  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type =='post' && slug.current=="everything-you-need-to-know-about-tor"][0]{
    _id,
    _createdAt,
    title,
    author->{
      name,
      image
    },
    'comments': *[
      _type=='comment' && 
      post._ref==^._id && 
      approved==true],
      description,
      mainImage,
      slug,
      body
      
    }`

  // const request = await sanityClient.fetch(query, {
  //   slug: params?.slug,
  // })

  // if (!post) {
  //   return {
  //     notFound: true,
  //   }
  // }

  // return {
  //   props: {
  //     post,
  //   },
  // }

  const request = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
