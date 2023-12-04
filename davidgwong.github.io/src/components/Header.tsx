import { useState } from "react";
import { Container, Burger, Collapse, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const links = [
  { link: "/design-and-dev", label: "DESIGN & DEVELOPMENT" },
  { link: "/personal-projects", label: "PERSONAL PROJECTS" },
  { link: "/photography", label: "PHOTOGRAPHY" },
  { link: "https://www.linkedin.com/in/davidgwong/", label: "LINKEDIN" },
  { link: "/about", label: "ABOUT" },
];

export default function Header() {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(true);
  const [active, setActive] = useState(location.pathname);

  const items = links.map((link, index) => (
    <Link
      key={index}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      <div className={classes.burgerPos}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </div>
      <header className={opened ? classes.headerToggled : classes.header}>
        <div className={classes.branding}>DAVID WONG</div>
        <Divider my="sm" />

        <Container fluid className={classes.inner} visibleFrom="sm">
          {items}
        </Container>

        <Collapse className={classes.collapse} in={opened} hiddenFrom="sm">
          {items}
          <Divider my="sm" />
        </Collapse>
        <Divider my="sm" visibleFrom="sm" />
      </header>
    </>
  );
}
