import { AppShell, Group, Navbar, NavbarProps, ScrollArea, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { Outlet, useNavigate } from '@tanstack/react-location';
import { useCallback } from 'react';
import { FiFeather, FiHome, FiFileText, FiBook } from 'react-icons/fi';
import styles from './main.module.scss';

const nav = {
  items: [
    {
      icon: <FiHome color="currentColor" />,
      label: 'Home',
      path: '/',
    },
    {
      icon: <FiBook color="currentColor" />,
      label: 'About',
      path: '/about',
    },
    {
      icon: <FiFileText color="currentColor" />,
      label: 'Data',
      path: '/list',
    },
  ],
};

const NavbarModule = (props: Omit<NavbarProps, 'children'>): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = useCallback((page: string) => {
    navigate({
      to: page,
    });
  }, [navigate]);

  return (
    <Navbar
      padding={10}
      width={{
        base: 300,
      }}
      {...props}
    >
      <Navbar.Section mt="xs" ml={24}>
        <Group>
          <ThemeIcon variant="light" radius="md" size="xl" color="cyan">
            <FiFeather color="currentColor" />
          </ThemeIcon><Text size="xl" color="cyan">Xerpihan</Text>
        </Group>
      </Navbar.Section>

      <Navbar.Section
        grow
        component={ScrollArea}
        ml={-10}
        mr={-10}
        mt={32}
        sx={{
          paddingLeft: 24, paddingRight: 24,
        }}
      >
        {nav.items.map((item) => (
          <UnstyledButton
            className={styles.navItem}
            onClick={() => handleNavigate(`${item.path}`)}
          >
            <Group m={8}>
              <ThemeIcon variant="light" radius="md" size="xl" color="gray">
                {item.icon}
              </ThemeIcon>
              <Text>
                {item.label}
              </Text>
            </Group>
          </UnstyledButton>
        ))}
        {/* scrollable content here */}
      </Navbar.Section>

      <Navbar.Section>User</Navbar.Section>
    </Navbar>
  );
};
const MainLayout = () => (
  <AppShell
    className={styles.shell}
    padding="md"
    navbar={<NavbarModule />}
    styles={(theme) => ({
      main: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    })}
  >
    <Outlet />
  </AppShell>
);

export default MainLayout;
