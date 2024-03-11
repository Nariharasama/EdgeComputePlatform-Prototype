import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
export default function Loading() {
  return (
    <Grid container minHeight={500}>
      <Grid
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CircularProgress size={100} />
      </Grid>
    </Grid>
  );
}
