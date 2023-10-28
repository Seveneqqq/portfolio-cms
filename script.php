<?php 

$conn = new mysqli('localhost', 'root', '', 'portfolioproject');

if ($conn -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }

      
if(isset($_POST["contactEmail"]) && $_POST["contactTextArea"]){

    $mail = $_POST["contactEmail"];
    $content = $_POST["contactTextArea"];
    
        $sql = "INSERT INTO `messages` (`Id_wiadomosci`, `email_nadawcy`, `tresc`, `data_utworzenia`, `czy_wyswietlono`) VALUES (NULL, '$mail', '$content', current_timestamp(), '0')";
        if ($conn->query($sql) === TRUE) {
            //alert o pomyślnym wysłaniu wiadomości
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            ////alert o nieudanej próbie
        }
}






$_POST = array();
require_once("index.php");

?>