import { useState } from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import {
  mdiCheck,
  mdiContentCopy,
  mdiEmailOutline,
  mdiGithub,
  mdiLinkedin,
  mdiPhoneOutline,
  mdiWeb,
} from "@mdi/js";
import { Header2 } from "../Components/common/Text";
import { MainWrapper, Section } from "../Components/common/Container";

type LinkItem = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
};

const links: LinkItem[] = [
  {
    id: "github",
    label: "My Github",
    value: "https://github.com/idomand",
    href: "https://github.com/idomand",
    icon: mdiGithub,
  },
  {
    id: "linkedin",
    label: "My LinkedIn",
    value: "https://www.linkedin.com/in/ido-mandelman/",
    href: "https://www.linkedin.com/in/ido-mandelman/",
    icon: mdiLinkedin,
  },
  {
    id: "email",
    label: "My Email",
    value: "idomand@gmail.com",
    href: "mailto:idomand@gmail.com",
    icon: mdiEmailOutline,
  },
  {
    id: "phone",
    label: "My Phone",
    value: "017673249064",
    href: "tel:017673249064",
    icon: mdiPhoneOutline,
  },
  {
    id: "portfolio",
    label: "My Portfolio",
    value: "https://hire-ido.com/",
    href: "https://hire-ido.com/",
    icon: mdiWeb,
  },
];

export default function Links() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function handleCopy(item: LinkItem) {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopiedId(item.id);
      setTimeout(
        () => setCopiedId((current) => (current === item.id ? null : current)),
        1500,
      );
    } catch {
      // Clipboard access can fail if the page is not focused or permissions are denied.
    }
  }

  return (
    <MainWrapper>
      <LinksSection>
        <Header2>Find me here</Header2>
        <LinkList>
          {links.map((item) => (
            <LinkRow key={item.id}>
              <LinkIconWrapper>
                <Icon path={item.icon} size={1} />
              </LinkIconWrapper>
              <LinkTextWrapper
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <LinkLabel>{item.label}</LinkLabel>
                <LinkValue>{item.value}</LinkValue>
              </LinkTextWrapper>
              <CopyButton
                type="button"
                onClick={() => handleCopy(item)}
                aria-label={`Copy ${item.label}`}
                title="Copy to clipboard"
              >
                <Icon
                  path={copiedId === item.id ? mdiCheck : mdiContentCopy}
                  size={0.8}
                />
              </CopyButton>
            </LinkRow>
          ))}
        </LinkList>
      </LinksSection>
    </MainWrapper>
  );
}

const LinksSection = styled(Section)`
  margin-top: 3rem;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkRow = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.white};
  border: 1.3px solid ${({ theme }) => theme.Grey};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.blue};
  }

  @media (${({ theme }) => theme.devices.break2}) {
    padding: 12px 16px;
    gap: 12px;
  }
`;

const LinkIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
`;

const LinkTextWrapper = styled.a`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  text-decoration: none;
  color: inherit;
`;

const LinkLabel = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.DarkBlue};
`;

const LinkValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.LightBlue};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0;
  border: 1.3px solid ${({ theme }) => theme.blue};
  border-radius: 50%;
  background-color: transparent;
  color: ${({ theme }) => theme.blue};
  cursor: pointer;
  transition: 0.3s;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};
  }
`;
