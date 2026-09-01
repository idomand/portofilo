import { styled } from "styled-components";
import { Header3, Text } from "./common/Text";
import { ProjectLink } from "./common/Links";

export type BlogPostData = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
};

export default function BlogPost({ post }: { post: BlogPostData }) {
  return (
    <PostCard>
      <PostMeta>{post.date}</PostMeta>
      <PostTitle>{post.title}</PostTitle>
      <Text>{post.excerpt}</Text>
      <ProjectLink href={post.href} rel="noreferrer">
        Read more
      </ProjectLink>
    </PostCard>
  );
}

const PostCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background-color: ${({ theme }) => theme.white};
  border: 1.3px solid ${({ theme }) => theme.Grey};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.blue};
  }

  @media (${({ theme }) => theme.devices.break2}) {
    padding: 16px;
  }
`;

const PostMeta = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.LightBlue};
`;

const PostTitle = styled(Header3)`
  margin: 0;
  text-align: left;
  text-decoration: none;
`;
