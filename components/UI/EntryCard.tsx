import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { DragEvent, FC, useContext } from "react";
import { UIContext } from "../../context/ui";
import { Entry } from "../../interfaces";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { setStartDraging, setEndDraging } = useContext(UIContext);
  const router = useRouter();

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    setStartDraging();
  };

  const onDragEnd = (): void => {
    setEndDraging();
  };

  const onClickEntrie = (id: string) => {
    router.push(`/entries/${id}`);
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={() => onClickEntrie(entry._id)}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
