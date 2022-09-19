import React, { FC } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { Navbar } from "../UI";
import { SideBar } from "../UI";

interface Props {
  title?: string;
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ title, children }: Props) => {
  return (
    <Box
      sx={{
        flexFlow: 1,
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <SideBar />
      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
