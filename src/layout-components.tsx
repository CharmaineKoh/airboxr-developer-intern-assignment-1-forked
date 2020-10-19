import {
  Box,
  IconButton,
  Typography,
  Button,
  CircularProgress
} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import React from "react";

export interface TopbarBackButton {
  type: "back";
  onClick: () => void | Promise<void>;
}

interface TopBarProps {
  leftButton?: TopbarBackButton;
  title: string;
}

export const FixedTopBar: React.FunctionComponent<TopBarProps> = (props) => {
  return (
    <Box
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        top: 0,
        right: 0,
        bottom: "auto",
        left: 0,
        position: "fixed",
        height: 60
      }}
      pt={1}
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      {props.leftButton ? (
        <IconButton
          edge="start"
          color="secondary"
          aria-label="menu"
          onClick={props.leftButton.onClick}
        >
          <ArrowBack />
        </IconButton>
      ) : undefined}
      <Typography variant="h2">{props.title}</Typography>
    </Box>
  );
};

interface BottomButtonProps {
  processing?: boolean;
  onClick: () => void | Promise<void>;
  title: string;
}

export const FixedBottomPominentButton: React.FunctionComponent<BottomButtonProps> = (
  props
) => {
  return (
    <Box
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        height: 50,
        top: "auto",
        right: 0,
        bottom: 0,
        left: 0,
        position: "fixed"
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {props.processing || false ? (
        <CircularProgress />
      ) : (
        <Button style={{ height: 50, width: "100%" }} onClick={props.onClick}>
          {props.title}
        </Button>
      )}
    </Box>
  );
};

export const FixedMiddleBodyWithVerticalScroll: React.FunctionComponent<{}> = (
  props
) => {
  return (
    <Box
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        top: 70,
        right: 0,
        bottom: 65,
        left: 0,
        position: "fixed",
        overflowY: "scroll"
      }}
      display="flex"
      flexDirection="column"
    >
      {props.children}
    </Box>
  );
};

export const PageContainer: React.FunctionComponent<{}> = (props) => {
  return (
    <Box display="flex" flexDirection="column">
      {props.children}
    </Box>
  );
};
