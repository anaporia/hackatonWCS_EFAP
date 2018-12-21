const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const { Transporter, connection } = require(`./conf`);
const PORT_SERVER = 59390;
const nodemailer = require("nodemailer");

app.use(bodyparser.urlencoded({ extended: false }));
// Etre capable de lire les données envoyées en json *en plus* de la route
app.use(bodyparser.json());
//pouvoir recuperer la réponse de serveur dans le navigateur de mon client
app.use(cors());

app.post(`/utilisateur`, (req, res) => {
  const formData = req.body;
  console.log(`called POST '/utilisateur : I'll liste my utilisateur`);
  connection.query(`INSERT INTO utilisateur set?`, formData, (err, results) => {
    if (err) {
      res.status(500).send(`not found ${err}`);
    } else {
      nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 2525,
          secure: false,
          auth: {
            user: Transporter.user,
            pass: Transporter.pass
          }
        });

        let mailOptions = {
          from: "wcs-efap@energie.com",
          to: formData.email,
          subject: "Engagement TDF",
          text: "T'as été bien ajouté à la petition TDF",
          html: `<b>T'as été bien ajouté à la petition TDF</b>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            res.status(500);
          }
        });
      });
      res.status(200).send(results);
    }
  });
});

app.get(`/sondage`, (req, res) => {
  connection.query(
    `SELECT count(id) as people FROM utilisateur`,
    (err, results) => {
      if (err) {
        res.status(500).send(`not found ${err}`);
      } else {
        res.send(results);
      }
    }
  );
});

app.use(function(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.write("you posted:\n");
  res.end(JSON.stringify(req.body, null, 2));
});

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/plain");
  res.status(404).send("Not found");
});

app.listen(PORT_SERVER, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`server is listening on ${PORT_SERVER}`);
});
