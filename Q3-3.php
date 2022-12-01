<?php

    $myfile = fopen("note.txt", "w");
    $txt = "Hi, I am Harshit Thapar, Roll no. A062, From Batch B3 and currently persuing MCA from MPSTME.";
    fwrite($myfile, $txt);
    fclose($myfile);
    
    
    ?>