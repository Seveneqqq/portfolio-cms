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
            
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
}


$_POST = array();
require_once("index.php");

?>