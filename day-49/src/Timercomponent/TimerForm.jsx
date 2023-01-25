import { Card, CardContent, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
export default function TimerForm({ id, title, project }) {
  const submitText = id ? "Update" : "Create";

  return (
    <div>
      <h1>Timer Form</h1>
      <Grid>
        <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  placeholder={title}
                  label={title}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  placeholder={project}
                  label={project}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Button color={"success"}>{submitText}</Button>
                <Button color={"success"}>Cancel</Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
