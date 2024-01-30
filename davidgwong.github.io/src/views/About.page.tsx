import { Image, Center, Title, Text } from "@mantine/core";

export default function AboutPage() {
  return (
    <>
      <Center>
        <Image
          src="https://avatars.githubusercontent.com/u/11532851?v=4"
          radius={200}
          h={200}
          w="auto"
          fit="contain"
          my={"1em"}
        />
      </Center>
      <Title order={2} tt="uppercase" c="#333">
        About David Wong
      </Title>
      <Text size="lg" c="#555">
        David is a mechanical & software engineer based in Vancouver, BC,
        Canada.
        <br /> He has over 10 years of industry experience in product design &
        development and 1 year of experience in software development.
        <br />
        He graduated with distinction (final year GPA: 94%/A+) from the UBC
        Mechatronics Engineering program.
        <br />He has also completed the Full-Stack Web Development program 
        (GPA: 99%/A+) from BCIT.
        <br />
        <br />
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/davidgwong/"
          style={{ color: "#0077b6" }}
        >
          https://www.linkedin.com/in/davidgwong/
        </a>
        <br />
        GitHub:{" "}
        <a
          href="https://www.github.com/davidgwong"
          style={{ color: "#0077b6" }}
        >
          https://www.github.com/davidgwong
        </a>
      </Text>
      <Title order={2} tt="uppercase" mt={"1em"} c="#333">
        About this website
      </Title>
      <Text size="lg" c="#555">
        This website was created using React, with React components from
        Mantine.
      </Text>
    </>
  );
}
