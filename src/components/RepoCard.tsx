import { Grid, Checkbox } from "@mui/material";
import Box from "@mui/system/Box";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  Card: {
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    borderRadius: "12px",
    border: "1px solid #eee",
    padding: "1rem",
    marginBottom: "1rem",
    "&:hover": {
      boxShadow: "0 1px 2px 1px rgba(0, 0, 0, .3)",
    },
  },
  OwnerAvatar: {
    maxWidth: "100%",
    maxHeight: "80px",
    height: "auto",
    borderRadius: "50%",
  },
  Content: {
    padding: "0 16px",
    wordBreak: "break-all",
    "& p": {
      marginTop: "8px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
    },
  },
});

interface RepoProps {
  data: any;
  checked: boolean;
  handleVisible: Function;
}

const RepoCard = ({ data, checked, handleVisible }: RepoProps) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.Card}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={2} md={1}>
            <a
              href={data.owner.url}
              target="_blank"
              rel="noreferrer"
              title={data.owner.login}
            >
              <img
                src={data.owner.avatar_url}
                alt={data.owner.login}
                className={classes.OwnerAvatar}
              />
            </a>
          </Grid>
          <Grid item xs={8} md={10} className={classes.Content}>
            <h3>{data.full_name}</h3>
            <p>{data.description}</p>
          </Grid>
          <Grid item xs={2} md={1}>
            <Checkbox
              id={data.node_id}
              onChange={(e) => handleVisible(e)}
              checked={checked}
              title="set visible flag"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RepoCard;
