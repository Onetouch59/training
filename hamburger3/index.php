<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css" class="css">
  <title>Document</title>
</head>
<body>
<div id="root">
  <div id="topnav" class="topnav">
    <a id="home_link" class="topnav_link" href="/">HOME</a>

    <!-- Classic Menu -->
    <nav role="navigation" id="topnav_menu">
      <a class="topnav_link" href="/about">ABOUT</a>
      <a class="topnav_link" href="/contact-us">CONTACT</a>
    </nav>

    <a id="topnav_hamburger_icon" href="javascript:void(0);" onclick="showResponsiveMenu()">
      <!-- Some spans to act as a hamburger -->
      <span></span>
      <span></span>
      <span></span>
    </a>

    <!-- Responsive Menu -->
    <nav role="navigation" id="topnav_responsive_menu">
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/contact-us">CONTACT</a></li>
        <li><a href="/privacy-policy">PRIVACY POLICY</a></li>
        <li><a href="/terms-and-conditions">TERMS AND CONDITIONS</a></li>
      </ul>
    </nav>
  </div>
</div>
  
<script src="main.js"></script>
</body>
</html>