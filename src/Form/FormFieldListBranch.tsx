import React from "react";
import classnames from "classnames";
import {
  Chip,
  List,
  ListItem,
  ListItemText,
  Paper,
  Tooltip,
  withStyles,
} from "@material-ui/core";
import FormFieldInput from "./FormFieldInput";

const styles = (theme: any) => ({
  root: {
    position: "relative",
    zIndex: 1,
    display: "inline-flex",
    flexDirection: "column",
  },
  list: {
    position: "absolute",
    top: theme.spacing(9),
    width: "100%",
    height: 0,
    opacity: 0,
    overflow: "hidden",
    transition: "0.25s",
  },
  listActive: {
    height: "auto",
    opacity: 1,
  },
  selectedItem: {
    display: "inline-flex",
    margin: "0.125rem",
  },
});

type FormFieldListBranchProps = {
  availableOptions: object[];
  listItems: (string | object)[];
  showMenu: boolean;
  renderElement?: (...args: any[]) => any;
  className: string;
  onClick: (...args: any[]) => any;
  onChange: (...args: any[]) => any;
  onBlur: (...args: any[]) => any;
  onDelete: (...args: any[]) => any;
  classes: {
    [key: string]: string;
  };
  id: string;
};

const FormFieldListBranch: React.SFC<FormFieldListBranchProps> = ({
  availableOptions,
  listItems,
  showMenu,
  renderElement,
  className,
  onClick,
  onChange,
  onBlur,
  onDelete,
  classes,
  ...rest
}) => {
  const renderListItem = (option: any, index: number) => {
    if (renderElement) {
      return renderElement(option, index);
    }

    if (!option) {
      return null;
    }

    const chipProp = {
      label: option.title,
      onDelete: onDelete(option),
    };

    if (option.tooltip) {
      return (
        <Tooltip
          key={`form-list-${index}`}
          title={option.tooltip}
          className={classes.selectedItem}
        >
          <Chip {...chipProp} />
        </Tooltip>
      );
    }

    return (
      <Chip
        {...chipProp}
        key={`form-list-${index}`}
        className={classes.selectedItem}
      />
    );
  };

  return (
    <div className={classnames(className, classes.root)}>
      <FormFieldInput {...rest} handleChange={onChange} onBlur={onBlur} />

      <Paper
        className={classnames(classes.list, {
          [classes.listActive]: showMenu && availableOptions.length > 0,
        })}
      >
        <List>
          {availableOptions.slice(0, 10).map((option: any) => {
            const key = Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
            const title = (
              <span dangerouslySetInnerHTML={{ __html: option.text }} />
            );
            return (
              <ListItem
                key={`form-field-list-${key}`}
                button
                onClick={onClick(option)}
              >
                <ListItemText primary={title} secondary={option.tooltip} />
              </ListItem>
            );
          })}
        </List>
      </Paper>

      <div>{listItems ? listItems.map(renderListItem) : null}</div>
    </div>
  );
};

export default withStyles(styles as any)(FormFieldListBranch);