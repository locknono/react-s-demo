import * as React from "react";
import { createContext, useContext, useState, memo } from "react";
import get from "lodash/get";
import Typography from "@mui/material/Typography";

export const useRecordContext = (props) => {
  // Can't find a way to specify the RecordType when CreateContext is declared
  const context = useContext(RecordContext);
  return (props && props.record) || context;
};

export const removeTags = (input) =>
  input ? input.replace(/<[^>]+>/gm, "") : "";

export const RecordContext = createContext(undefined);

export const RichTextField = memo((props) => {
  const { className, emptyText, source, stripTags = false } = props;
  const [text, setText] = useState("");
  const record = useRecordContext(props);
  const value = get(record, source);
  return (
    <Typography className={className} variant="body2" component="span">
      {value == null && emptyText ? (
        text
      ) : stripTags ? (
        removeTags(value)
      ) : (
        <span dangerouslySetInnerHTML={{ __html: value }} />
      )}
    </Typography>
  );
});
