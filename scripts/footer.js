function pageFooter(path) {

$("div.page_footer").html(" \
  <!-- BEGIN PRE-FOOTER --> \
  <div class='pre-footer'> \
    <div class='container'> \
      <div class='row'> \
        <!-- BEGIN BOTTOM CONTACTS --> \
        <div class='col-md-3 col-sm-6'> \
          <h2>Robot Articulation</h2> \
          <address class='margin-bottom-20'> \
            32 Rue Humbert<br> \
            Le Bourg d'Oisans<br> \
            38520, France<br> \
            Email: <a href='mailto:info@robotarticulation.com'>info@robotarticulation.com</a><br> \
          </address> \
        </div> \
        <!-- END BOTTOM CONTACTS --> \
\
        <!-- BEGIN BOTTOM ABOUT BLOCK --> \
        <div class='col-md-3 col-sm-6 pre-footer-col'> \
          <h2>About</h2> \
          <p><a href='" + path + "/about.html'>About Us</a></p> \
          <p><a href='" + path + "/contacts.html'>Contact Us</a></p> \
          <p><a href='" + path + "/early_adopter_program.html'>Early Adopter Program</a></p> \
          <p><a href='" + path + "/early_adopter_application.html'>Early Adopter Application</a></p> \
          <p><a href='" + path + "/../downloads/legal/legal-notice.pdf' target='_blank'>Legal Notice</a></p> \
        </div> \
        <!-- END BOTTOM ABOUT BLOCK --> \
\
        <!-- BEGIN BOTTOM PRODUCTS BLOCK --> \
        <div class='col-md-3 col-sm-6 pre-footer-col'> \
          <h2>Products</h2> \
            <p><a href='" + path + "/product_mercury_m30.html'>Mercury M30</a></p> \
            <p><a href='" + path + "/product_mercury_m50.html'>Mercury M50</a></p> \
            <p><a href='" + path + "/product_mercury_m65.html'>Mercury M65</a></p> \
            <p><a href='" + path + "/product_usb2mercury.html'>USB2Mercury</a></p> \
            <p><a href='" + path + "/product_mercury_power_hub.html'>Mercury Power Hub</a></p> \
            <p><a href='" + path + "/product_key_features.html'>Key Features</a></p> \
        </div> \
        <!-- END BOTTOM PRODUCTS BLOCK --> \
\
        <!-- BEGIN BOTTOM DOWNLOADS BLOCK --> \
        <div class='col-md-3 col-sm-6 pre-footer-col'> \
          <h2>Downloads</h2> \
          <p><a href='" + path + "/download_mercury_manuals.html'>Manuals</a></p> \
          <p><a href='" + path + "/download_mercury_software.html'>Software</a></p> \
          <p><a href='" + path + "/download_mercury_mechanical.html'>Mechanical Drawings</a></p> \
        </div> \
        <!-- END BOTTOM DOWNLOADS BLOCK --> \
\
      </div> \
    </div> \
  </div> \
  <!-- END PRE-FOOTER --> \
\
  <!-- BEGIN FOOTER --> \
  <div class='footer'> \
    <div class='container'> \
      <div class='row'> \
        <!-- BEGIN COPYRIGHT --> \
        <div class='col-md-4 col-sm-4 padding-top-10'> \
          2020 © Robot Articulation. ALL Rights Reserved. \
        </div> \
        <!-- END COPYRIGHT --> \
        <!-- BEGIN PAYMENTS --> \
        <div class='col-md-4 col-sm-4'> \
          <ul class='social-footer list-unstyled list-inline pull-right'> \
            <li><a href='https://linkedin.com/company/robot-articulation' target='_blank'><i class='fa fa-linkedin'></i></a></li> \
            <li><a href='https://www.facebook.com/Robot-Articulation-840592286096400' target='_blank'><i class='fa fa-facebook'></i></a></li> \
            <li><a href='https://github.com/RobotArticulation' target='_blank'><i class='fa fa-github'></i></a></li> \
          </ul>  \
        </div> \
        <!-- END PAYMENTS --> \
      </div> \
    </div> \
  </div> \
  <!-- END FOOTER --> \
  ");

}