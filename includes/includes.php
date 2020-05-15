    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">

    <link rel="icon" href="./imagenes/favicon.ico" />
    <link rel="stylesheet" href="./css/style.css">
    <link href="http://fonts.googleapis.com/css?family=Rokkitt:400,700%7CLato:400,300" rel="stylesheet">
    <!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->


    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <link href="./css/bootstrap-theme.min.css" rel="stylesheet">


    <!-- alertify -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.min.css"/>

    <script type="text/javascript" src="./js/jquery.min.js"></script>
    <script type="text/javascript" src="./js/i18next-1.8.0.min.js"></script>

  </head>
  <body id="top">

<!--googleoff: all-->

    <?php
    if(!isset($_COOKIE['eucookie']))
    {
      if($_COOKIE['eucookie']!=1){
      ?>
        <div id="eucookielaw" >
        <p>Este sitio web utiliza cookies propias y de terceros para mejorar su navegación. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra web. <a href="cookies.php">Política de cookies</a><img src="./imagenes/close.png" onclick="ocultar()" alt="close" class="closeCookie"></p>

        </div>

      <?php
      }
    }
    ?>

<!--googleon: all-->
