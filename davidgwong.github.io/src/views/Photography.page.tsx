import { Carousel } from "@mantine/carousel";
import { Image, Text, Center } from "@mantine/core";

import Photos from "../data/photos";
import classes from "./Photography.page.module.css";

export default function PhotographyPage() {
  const slides = Photos.map((photo) => (
    <Carousel.Slide key={photo.title} my="auto">
      <Image
        fit="contain"
        src={photo.image}
        w={{ base: 285, xs: 600 }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      />
      <Text size="lg" c="dimmed" py={"1em"}>
        {photo.title}
      </Text>
    </Carousel.Slide>
  ));

  return (
    <Center>
      <Carousel
        withIndicators
        loop
        slideGap="md"
        align="center"
        classNames={classes}
        w={{ base: 285, xs: 600 }}
        h={{ base: 385, xs: 700 }}
      >
        {slides}
      </Carousel>
    </Center>
  );
}
