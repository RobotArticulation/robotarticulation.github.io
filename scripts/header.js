function pageHeader(path, img_path, active_menu) {

$("div.page_header").html(" \
  <div class='header'> \
    <div class='container'> \
       <div> \
        <div class='ra-site-logo-wrapper col-xs-10 col-sm-11 col-md-11 col-lg-6'> \
          <a class='site-logo' href='" + path + "/../index.html'> \
            <img class='ra-header-img' src='" + img_path + "/img/logos/RobotArticulation_header_logo.png'></a> \
        </div> \
\
        <div class='col-xs-2 col-sm-1 col-md-1 col-lg-6'> \
          <a href='javascript:void(0);' class='mobi-toggler'><i class='fa fa-bars'></i></a> \
        </div> \
        <!-- BEGIN NAVIGATION --> \
        <div class='header-navigation pull-right font-transform-inherit'> \
          <ul> \
            <li id='home'> \
              <a href='" + path + "/../index.html'>Home</a> \
            </li> \
\
            <li id='product' class='dropdown'> \
              <a class='dropdown-toggle' data-toggle='dropdown' data-target='#' href='javascript:;'> \
                Products \
              </a> \
\
              <ul class='dropdown-menu'> \
                <li><a href='" + path + "/product_mercury_m30.html'>Mercury M30</a></li> \
                <li><a href='" + path + "/product_mercury_m50.html'>Mercury M50</a></li> \
                <li><a href='" + path + "/product_mercury_m65.html'>Mercury M65</a></li> \
                <li><a href='" + path + "/product_usb2mercury.html'>USB2Mercury</a></li> \
                <li><a href='" + path + "/product_mercury_power_hub.html'>Mercury Power Hub</a></li> \
                <li><a href='" + path + "/product_key_features.html'>Key Features</a></li> \
              </ul> \
            </li> \
\
            <li id='download' class='dropdown'> \
              <a class='dropdown-toggle' data-toggle='dropdown' data-target='#' href='javascript:;'> \
                Downloads \
              </a> \
\
              <ul class='dropdown-menu'> \
                <li><a href='" + path + "/download_mercury_manuals.html'>Manuals</a></li> \
                <li><a href='" + path + "/download_mercury_software.html'>Software</a></li> \
                <li><a href='" + path + "/download_mercury_mechanical.html'>Mechanical Drawings</a></li> \
              </ul> \
\
            </li> \
\
            <li id='support' class='dropdown'> \
              <a class='dropdown-toggle' data-toggle='dropdown' data-target='#' href='javascript:;'> \
                Support \
              </a> \
\
              <ul class='dropdown-menu'> \
                <li><a href='" + path + "/early_adopter_program.html'>Early adopter program</a></li> \
                <li><a href='" + path + "/early_adopter_application.html'>Early adopter application</a></li> \
              </ul> \
\
            </li> \
\
            <li id='about'> \
              <a href='" + path + "/about.html'>About us</a> \
            </li> \
\
            <li id='contact'> \
              <a href='" + path + "/contacts.html'>Contact us</a> \
            </li> \
          </ul> \
        </div> \
        <!-- END NAVIGATION --> \
      </div> \
    </div>  \
  </div> \
    ");

  $( "#" + active_menu ).addClass("active");

}