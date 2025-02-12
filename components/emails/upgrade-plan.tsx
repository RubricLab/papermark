import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Link,
  Hr,
} from "@react-email/components";

interface UpgradePlanEmailProps {
  name: string | null | undefined;
}

const UpgradePlanEmail = ({ name }: UpgradePlanEmailProps) => {
  const previewText = `The document sharing infrastructure for the modern web`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-10 mx-auto p-5 w-[465px]">
            <Heading className="text-2xl font-normal text-center p-0 mt-4 mb-8 mx-0">
              <span className="font-bold tracking-tighter">Papermark</span>
            </Heading>
            <Heading className="text-2xl font-normal text-center p-0 mt-4 mb-8 mx-0">
              Thanks for for upgrading to Papermark Pro!
            </Heading>
            <Text className="text-sm leading-6 text-black">
              Hey{name && ` ${name}`}!
            </Text>
            <Text className="text-sm">
              My name is Marc, and I&apos;m the creator of Papermark. I wanted
              to personally reach out to thank you for upgrading to Papermark
              Pro!
            </Text>
            <Text className="text-sm leading-6 text-black">
              As you might already know, we are a bootstrapped and{" "}
              <Link
                href="https://github.com/mfts/papermark"
                target="_blank"
                className="font-medium text-emerald-500 no-underline"
              >
                open-source
              </Link>{" "}
              business. Your support means the world to us and helps us continue
              to build and improve Papermark.
            </Text>
            <Text className="text-sm leading-6 text-black">
              On the Pro plan, you now have access to:
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Custom domains
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Unlimited link views
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Unlimited document uploads
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Unlimited team members (coming soon)
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-black rounded text-white text-xs font-semibold no-underline text-center"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/settings/domains`}
              >
                Set up your custom domain
              </Button>
            </Section>
            <Section>
              <Text className="text-sm">
                Let me know if you have any questions or feedback. I&apos;m
                always happy to help!
              </Text>
              <Text className="text-sm text-gray-400">Marc from Papermark</Text>
            </Section>
            <Hr />
            <Section className="mt-8 text-gray-400">
              <Text className="text-xs">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://doc.rubric.sh"
                  className="no-underline text-gray-400 hover:text-gray-400 visited:text-gray-400"
                  target="_blank"
                >
                  doc.rubric.sh
                </a>
              </Text>
              <Text className="text-xs">
                If you have any feedback or questions about this email, simply
                reply to it. I&apos;d love to hear from you!
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default UpgradePlanEmail;
