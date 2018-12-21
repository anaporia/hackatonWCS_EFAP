import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.appearModal = this.appearModal.bind(this);
  }

  appearModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <footer className='footer d-flex justify-content-center py-3'>
        <Button
          className='buttonLegalMentions font-weight-bold'
          onClick={this.appearModal}
        >
          {this.props.buttonLabel}
        </Button>
        <Modal
          className='modalFooter'
          isOpen={this.state.modal}
          toggle={this.appearModal}
        >
          <ModalHeader className='headerModalFooter' toggle={this.appearModal}>
            Legal mentions
          </ModalHeader>
          <ModalBody>
            Please read these Terms and Conditions of Use of this site carefully
            before accesing the website “GROUP NAME”. By connecting to this
            site, you unreservedly accept these Terms and Conditions.
            <br />
            <br />
            <p>1°) Publisher of the site.</p>
            Group Name Site
            <br />
            INNOV'EDUC
            <br />
            59000 Lille France
            <br />
            Telephone. : (+33) 07 61 83 26 08
            <br />
            https://www.mhc.fr
            <br />
            INNOV'EDUC (SAS) Siret: 79492606300106 - APE: 8560Z
            <br />
            <br />
            <p>2°) Terms of use.</p>
            The site accessible operates in compliance with French legislation.
            The use of this site is governed by these Terms and Conditions. By
            using the site, you acknowledge having read and accepted these
            Conditions. These can be modified at any time and without notice by
            the company INNOV'EDUC. INNOV'EDUC can not be held responsible in
            any way for misuse of the service.
            <br />
            <br />
            <p>3°) Editorial Manager.</p>
            Olivier Trentesaux
            <br />
            Group Name Website by INNOV'EDUC
            <br />4 avenue des Saules 59000 Lille France
            <br />
            Telephone. : (+33) 07 61 83 26 08
            <br />
            LINK OF THE SITE
            <br /> <br />
            <p>4°) Litigation.</p>
            These Conditions are governed by French law and any dispute or
            litigation that may arise from the interpretation or execution of
            these will be the exclusive jurisdiction of the courts on which
            depends the headquarters of the company INNOV'EDUC. The reference
            language for the settlement of potential disputes is French.
            <br />
            <br />
            <p>5°) Intellectual property.</p>
            All content on this site, including, but not limited to, graphics,
            images, text, videos, animations, sounds, logos, gifs and icons and
            their formatting are the exclusive property of INNOV'EDUC. except
            for trademarks, logos or content belonging to other partner
            companies or authors. Any reproduction, distribution, modification,
            adaptation, retransmission or publication, even partial, of these
            elements is strictly prohibited without the express written
            agreement of INNOV'EDUC. This representation or reproduction, by any
            means whatsoever, constitutes an infringement punishable by articles
            L.3335-2 and following of the Code of Intellectual Property. Failure
            to comply with this prohibition constitutes an infringement that may
            incur the civil and criminal liability of the infringer. In
            addition, owners of copied Content may sue you. INNOV'EDUC is the
            same owner of the "rights of producers of databases" referred to in
            Book III, Title IV, of the Code of Intellectual Property (Law No.
            98-536 of 1 July 1998) on copyright and data base. Users and
            visitors of the website may set up a hyperlink to this site, but
            only in the direction of the home page, accessible at the following
            URL: www.mhc.fr, provided that this link opens in a new window. In
            particular, a link to a sub page ("deep link") is prohibited, as
            well as the opening of this site within a frame ("framing"), except
            the express and prior authorization of INNOV'EDUC. For any request
            for authorization or information, please contact us by email:
            loic@wildcodeschool.fr. Specific Conditions are provided for the
            press. In addition, the formatting of this site required the use of
            external sources whose rights we have acquired or whose rights of
            use are open: HTML 5 / CSS 3 / Bootstrap 4.1.3 / JavaScript /
            ReactJS 16.5.2 / Node JS 10.10.0
            <br />
            <br />
            <p>7 °) Conditions of service.</p>
            This site is offered in HTML5, CSS3 and Javascript languages, for a
            better user experience and a more pleasant graphics, we recommend
            using modern browsers.
            <br />
            <br />
            <p>8 °) Information and exclusion.</p>
            INNOV'EDUC implements all the means at its disposal, to ensure
            reliable information and a reliable update of its websites. However,
            errors or omissions may occur. The user must therefore ensure the
            accuracy of information from INNOV'EDUC and report any changes to
            the site that it deems useful. INNOV'EDUC is in no way responsible
            for the use made of this information, and any direct or indirect
            damage that may result.
            <br />
            <br />
            <p>9 °) Hypertext links.</p>
            INNOV'EDUC websites may offer links to other websites or other
            resources available on the Internet. INNOV'EDUC has no way to
            control sites in connection with its websites. INNOV'EDUC does not
            answer for the availability of such sites and external sources, nor
            does it guarantee it. It can not be held liable for any damage, of
            any nature whatsoever, resulting from the content of these sites or
            external sources, including information, products or services they
            offer, or any use that can be made of these elements. The risks
            associated with this use are the full responsibility of the user,
            who must comply with their Conditions of Use. Users, subscribers and
            visitors of INNOV'EDUC websites can not set up a hyperlink to this
            site without the express and prior authorization of INNOV'EDUC. In
            the event that a user or visitor wishes to set up a hyperlink to one
            of INNOV'EDUC's websites, it will be up to him to send an email
            accessible on the site in order to formulate his request for the
            establishment of a hyperlink. INNOV'EDUC reserves the right to
            accept or refuse a hyperlink without having to justify its decision.
            <br />
            <br />
            <p>10 °) Research.</p>
            In addition, the reference on a website to supplement information
            sought in no way means that INNOV'EDUC recognizes or accepts any
            responsibility for the content or use of said site.
            <br />
            <br />
            <p>11°) Precautions of use.</p>
            It is therefore your responsibility to take the necessary
            precautions to ensure that what you choose to use is not tainted by
            errors or even destructive elements such as viruses, trojans, etc.
            <br />
            <br />
            <p>12 °) Responsibility.</p>
            No other guarantee is given to the customer, who has the obligation
            to clearly formulate his needs and the duty to inform himself. If
            the information provided by INNOV'EDUC appears inaccurate, it will
            be up to the client himself to make any checks on the consistency or
            the likelihood of the results obtained. INNOV'EDUC will not be
            responsible in any way to third parties for the use by the customer
            of information or their absence contained in its products including
            one of its websites.
            <br />
            <br />
            <p>13 °) Contact us.</p>
            INNOV'EDUC is at your disposal for any comments or suggestions. You
            can write to us in French or English by e-mail at:
            loic@wildcodeschool.fr or olivier@wildcodeschool.fr.
          </ModalBody>
          <ModalFooter>
            <Button className='buttonModalMentions' onClick={this.appearModal}>
              I comply
            </Button>
          </ModalFooter>
        </Modal>
        <div className='wildfooter text-center mx-4'>
          Made with ❤ by
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.wildcodeschool.fr'
          >
            &nbsp;Wild Code School
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
