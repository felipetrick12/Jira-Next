import { Card, CardHeader, Grid } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/UI";

const Home: NextPage = () => {
  return (
    <Layout title="Home Open-Jira">
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)", margin: "10px 10px 0px" }}>
            <CardHeader title="Pendientes" />
            <div style={{ padding: "20px 15px" }}>
              <NewEntry />
            </div>
            <EntryList status={"pending"} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{ height: "calc(100vh - 100px) ", margin: "10px 10px 0px" }}
          >
            <CardHeader title="En proceso" />
            <EntryList status={"in-progress"} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)", margin: "10px 10px 0px" }}>
            <CardHeader title="Finalizadas" />
            <EntryList status={"finished"} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
