<!DOCTYPE html>
<html>
  <head>
    <?php
    if(!isset($_COOKIE['eucookie']))
    {
      if($_COOKIE['eucookie']!=1){
        setcookie("eucookie", 1, time() + (86400 * 180), "/");
      }
    }
    ?>
