import * as React from "react";
import { createContext, useContext, memo } from "react";
import get from "lodash/get";
import Typography from "@mui/material/Typography";
import { useRecordContext } from "ra-core";
import { sanitizeFieldRestProps } from "./sanitizeFieldRestProps";

export const RecordContext = createContext(undefined);

export const RecordContextProvider = ({ children, value }) => (
  <RecordContext.Provider value={value}>{children}</RecordContext.Provider>
);

export const useRecordContext = (props) => {
  // Can't find a way to specify the RecordType when CreateContext is declared
  // @ts-ignore
  const context = useContext < RecordType > RecordContext;
  return (props && props.record) || context;
};

export const RichTextField =
  memo <
  RichTextFieldProps >
  ((props) => {
    const { className, emptyText, source, stripTags = false, ...rest } = props;
    const record = useRecordContext(props);
    const value = get(record, source);
    return (
      <Typography className={className} variant="body2" component="span">
        {value == null && emptyText ? (
          emptyText
        ) : stripTags ? (
          removeTags(value)
        ) : (
          <span dangerouslySetInnerHTML={{ __html: value }} />
        )}
      </Typography>
    );
  });

export const removeTags = (input) =>
  input ? input.replace(/<[^>]+>/gm, "") : "";
