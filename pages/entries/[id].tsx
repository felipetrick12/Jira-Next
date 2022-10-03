import React, { ChangeEvent, FC, useMemo, useState } from "react";
import { isValidObjectId } from "mongoose";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Layout } from "../../components/layouts";
import SaveIcon from "@mui/icons-material/Save";
import { Entry, EntryStatus } from "../../interfaces";
import { GetServerSideProps } from "next";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { dbEntries } from "../../databases";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry;
}

const EntriesPage: FC<Props> = (props) => {
  console.log("props", props);

  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<EntryStatus>("pending");
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {};

  return (
    <Layout title="...">
      <>
        <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardHeader
                title={`Entrada ${inputValue}`}
                subheader={"Creada hace:... minutos"}
              />
              <CardContent>
                <TextField
                  sx={{ marginTop: 2, marginBottom: 1 }}
                  fullWidth
                  placeholder="Nueva entrada"
                  autoFocus
                  multiline
                  label="Nueva entrada"
                  value={inputValue}
                  onChange={onInputValueChange}
                  onBlur={() => setTouched(true)}
                  error={isNotValid}
                  helperText={isNotValid && "Ingrese un valor"}
                />
                <FormControl>
                  <FormLabel>Estado:</FormLabel>
                  <RadioGroup row value={status} onChange={onStatusChange}>
                    {validStatus.map((option) => {
                      return (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<SaveIcon />}
                  variant="contained"
                  fullWidth
                  disabled={inputValue.length <= 0}
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <IconButton
          sx={{
            position: "fixed",
            right: 30,
            bottom: 30,
            backgroundColor: "red",
          }}
          onClick={onSave}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntriesById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry,
    },
  };
};

export default EntriesPage;
