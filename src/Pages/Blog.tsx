import styled from "styled-components";
import { Header2 } from "../Components/common/Text";
import { MainWrapper, Section } from "../Components/common/Container";
import BlogPost, { BlogPostData } from "../Components/BlogPost";

const posts: BlogPostData[] = [
  {
    id: "hello-world",
    title: "Hello, world",
    date: "August 2026",
    excerpt:
      "First post — a placeholder for what's to come. Swap this out with real writing about frontend, UX, and the things I build.",
    href: "#",
  },
];

export default function Blog() {
  return (
    <MainWrapper>
      <BlogSection>
        <Header2>Blog</Header2>
        <PostList>
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </PostList>
      </BlogSection>
    </MainWrapper>
  );
}

const BlogSection = styled(Section)`
  margin-top: 3rem;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
