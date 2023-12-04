import { Card, Image, Text, SimpleGrid, Title } from "@mantine/core";

type Project = {
  name: string;
  description: string;
  imgSrc: string;
};

type Props = {
  projects: Project[];
}

export default function ProjectGrid(props: Props) {
  const cards = props.projects.map((project) => (
    <Card radius={0} shadow="sm" key={project.name}>
      <Card.Section>
        <Image
          src={project.imgSrc}
          fit="contain"
          h={200}
          py={"1em"}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </Card.Section>
      <Title order={3} tt="uppercase" c="#333">
        {project.name}
      </Title>
      <Text size="lg" c="dimmed">
        {project.description}
      </Text>
    </Card>
  ));

  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }} mb="lg" maw={954}>
      {cards}
    </SimpleGrid>
  );
}
