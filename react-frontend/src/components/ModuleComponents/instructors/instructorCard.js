import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import InstructorEdit from "./InstructorEdit";
import InstructorDelete from "./InstructorDelete";
const styles = theme => ({
    root: {
      flexGrow: 1
    },
    control: {
      padding: theme.spacing.unit * 2
    },
    card: {
      height: 403
    },
    buttonrow: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexGrow: 1
    },
    media: {
      height: 140
    }
  });

  class InstructorsCard extends Component{
      constructor(props){
          super(props);
          this.state={
              instructor:this.props.instructor
          }
      }
      render(){
        const {classes}=this.props;
        return (
          <Card className={classes.card}>
                    <CardContent>
                      <Grid
                        container
                        className={classes.root}
                        justify="flex-start"
                        alignItems="flex-start"
                        direction="row"
                        spacing={8}
                      >
                        <Grid item xs={12}>
                          <TextField
                            id="instructor-name"
                            label="Name"
                            defaultValue={this.state.instructor.name}
                            className={classes.textField}
                            margin="dense"
                            InputProps={{
                              readOnly: true,
                              style: {fontSize: "24px"}
                            }}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="instructor-license"
                            label="License No."
                            defaultValue={this.state.instructor.licenseNum}
                            className={classes.textField}
                            margin="dense"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="instructor-ratings"
                            label="Ratings"
                            defaultValue={this.state.instructor.ratings}
                            className={classes.textField}
                            margin="dense"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id="instructor-contact"
                            label="Contact"
                            defaultValue={this.state.instructor.contactInfo}
                            className={classes.textField}
                            margin="dense"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                            multiline
                            rows="2"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id="instructor-notes"
                            label="Notes"
                            defaultValue={this.state.instructor.notes}
                            className={classes.textField}
                            margin="dense"
                            InputProps={{
                              readOnly: true
                            }}
                            variant="outlined"
                            multiline
                            rows="2"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Grid
                            container
                            className={classes.root}
                            justify="flex-start"
                            alignItems="flex-start"
                            direction="row"
                            spacing={8}
                          >
                            <Grid item xs={6}>
                              <InstructorEdit
                                {...this.props}
                                switcher={this.switcher}
                                instructor={this.state.instructor}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <InstructorDelete
                                id={this.state.instructor.id}
                                switcher={this.switcher}
                              />
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
        )
      }
  }
  export default withStyles(styles)(InstructorsCard);