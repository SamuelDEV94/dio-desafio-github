<html>

    <head>
    <title>Meu primeiro site em PHP Woohoo</title>

    <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>

    <style type="text/css">
        .linha {
            font-weight: bold;
            color: green;
            padding-left: 10px;
            line-height: 80px;
        }
    </style>

    </head>
    
    <body>
        <?php
           for ($i = 0; $i < 10 ; $i++ ) {
               print("<span class=\"linha\" >Linha número " .$i . "</span><br />");
           }



    ?>    
    </body>

    <script type="text/javascript">
        $(document).ready(function() {
            alert("Woohoo!") ;
        });




    </script>









</html>