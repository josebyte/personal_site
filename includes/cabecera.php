<?php
if (!isset($_COOKIE['eucookie'])) { ?>
    <script type="text/javascript">
        function SetCookie(c_name, value, expiredays) {
            const exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            document.cookie = c_name + "=" + escape(value) + ";path=/" + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
        }
    </script>
<?php } ?>

<header>
    <nav class="navbar navbar-default navbar-fixed-top <?php if ($_COOKIE['eucookie'] != 1) { ?> nofijo <?php } ?>"
         role="navigation">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Navegación Toggle</span><span class="icon-bar"></span>
                <span class="icon-bar"></span><span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Joseba Madrigal</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">

                <li class="<?php if ($seccion == "curriculum") {
                    echo active;
                } ?>">
                    <a href="./"><span class="glyphicon glyphicon-list-alt"></span> Curriculum</a>
                </li>
                <li class="<?php if ($seccion == "portafolio") {
                    echo active;
                } ?>">
                    <a href="portafolio.php">
                        <span class="glyphicon glyphicon-folder-open"></span>&nbsp;
                        <span data-i18n="nav.portafolio">Portafolio</span>
                    </a>
                </li>

                <li class="<?php if ($seccion == "cartas") {
                    echo active;
                } ?>">
                    <a href="cartas.php">
                        <span class="glyphicon glyphicon-thumbs-up"></span>&nbsp;
                        <span data-i18n="nav.recomendaciones">Cartas de recomendación</span>
                    </a>
                </li>

                <li class="navbar-right">
                    <a href="javascript:window.print()">
                        <span class="glyphicon glyphicon-print"></span>
                        <span data-i18n="nav.imprimir">Imprimir</span>
                    </a>
                </li>
                <li class="contactar navbar-right">
                    <a style="cursor:pointer;">
                        <span class="glyphicon glyphicon-envelope"></span>
                        <span data-i18n="nav.contactar">Contactar</span>
                    </a>
                </li>

            </ul>


            <ul class="nav navbar-nav navbar-right">
                <li class="flag" id="en-US"><img src="../imagenes/flags/en.png"/></li>
                <li class="flag" id="es-ES"><img src="../imagenes/flags/es.png"/></li>
                <li class="flag" id="eus-ES"><img src="../imagenes/flags/eus.png"/></li>
            </ul>


        </div>
    </nav>
</header>
