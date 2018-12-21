import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";
import classNames from "classnames";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import green from "@material-ui/core/colors/green";

const variantIcon = {
  success: CheckCircleIcon
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

class Petition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nom: "",
      prenom: "",
      email: "",
      open: false,
      compteur: 0
    };
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  updateNom = event => {
    this.setState({ nom: event.target.value });
  };

  updatePrenom = event => {
    this.setState({ prenom: event.target.value });
  };

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  componentDidMount() {
    let api = axios;
    api.get("http://localhost:59390/sondage").then(data => {
      this.setState({
        compteur: data.data[0].people
      });
    });
  }

  toggle = () => {
    if (this.state.modal === true) {
      let api = axios;
      let info = {
        nom: this.state.nom,
        prenom: this.state.prenom,
        email: this.state.email
      };
      api
        .post("http://localhost:59390/utilisateur", info)
        .then(response => {
          this.setState({ open: true });
          api.get("http://localhost:59390/sondage").then(data => {
            this.setState({
              compteur: data.data[0].people
            });
          });
        })
        .catch(error => console.log(error));
      this.setState({
        nom: "",
        prenom: "",
        email: ""
      });
    }
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>PETITION TDF</CardTitle>
                <CardText>
                  Tu veux faire part de la pétition TDF et recevoir des
                  nouvelles ?
                </CardText>
                <div className="row d-flex justify-content-center">
                  <Button onClick={this.toggle}>
                    {this.props.buttonLabel}Bien sur !
                  </Button>
                </div>
              </CardBody>
              <p className="font-weight-bold d-flex justify-content-center">
                {this.state.compteur} utilisateurs ont répondu à l'enquête.
              </p>
            </Card>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              open={this.state.open}
              autoHideDuration={4000}
              onClose={this.handleClose}
            >
              <MySnackbarContentWrapper
                onClose={this.handleClose}
                variant="success"
                className={classes.margin}
                message="Success !!"
              />
            </Snackbar>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>
                M'engager sur la pétition TDF
              </ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Enim nemo facere incidunt nam, rem quidem dolorum ut sunt
                      mollitia quam debitis qui non voluptates dignissimos in
                      dolor maxime officiis maiores.
                    </p>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="exemple@email.com"
                      value={this.state.email}
                      onChange={this.updateEmail}
                    />
                    <br />
                    <Label for="exampleNom">Nom</Label>
                    <Input
                      type="text"
                      name="nom"
                      id="exampleNom"
                      placeholder="Ton nom"
                      value={this.state.nom}
                      onChange={this.updateNom}
                    />
                    <br />
                    <Label for="examplePrenom">Prenom</Label>
                    <Input
                      type="text"
                      name="prenom"
                      id="examplePrenom"
                      placeholder="Ton prenom"
                      value={this.state.prenom}
                      onChange={this.updatePrenom}
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>
                  Do Something
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles2)(Petition);
