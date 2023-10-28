<?php 




$conn = new mysqli('localhost', 'root', '', 'portfolioproject');

if ($conn -> connect_errno) {
    echo "Failed to connect to MySQL: " . $conn -> connect_error;
    exit();
  }

if(isset($_POST["mail-login"]) && $_POST["password-login"]){

    $login = $_POST["mail-login"];
    $password = $_POST["password-login"];

    $password = password_hash($password, PASSWORD_DEFAULT);
    
    
        $sql = "INSERT INTO `users` (`user_Id`, `privileges_Id`, `login`, `password`) VALUES (NULL, 'NULL', '$login', '$password')";
        
        if ($conn->query($sql) === TRUE) {
            //alert o zalogowaniu\
            echo "dziala";
            echo $sql;
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            ////alert o nieudanej próbie logowania
        }
        
        //
}

if(isset($_POST["contactEmail"]) && $_POST["contactTextArea"]){

    $mail = $_POST["contactEmail"];
    $content = $_POST["contactTextArea"];
    
        $sql = "INSERT INTO `messages` (`Id_wiadomosci`, `email_nadawcy`, `tresc`, `data_utworzenia`, `czy_wyswietlono`) VALUES (NULL, '$mail', '$content', current_timestamp(), '0')";
        if ($conn->query($sql) === TRUE) {
            echo "dziala";
            //alert o pomyślnym wysłaniu wiadomości
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            ////alert o nieudanej próbie
        }
}




//require_once("index.php");
?>