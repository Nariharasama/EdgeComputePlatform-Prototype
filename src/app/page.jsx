import * as React from "react";
import { Button, Grid, Typography, Card } from "@mui/material";
import Welcomecard from "@/app/welcomecard";
export default function Home() {
  return (
    <Grid container className={"h-[600px]"}>
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card variant={"outlined"} className={"w-[720px] h-[280px]"}>
          <Welcomecard />
        </Card>
      </Grid>
    </Grid>
  );
}
