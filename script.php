<?php 

$conn = new mysqli('localhost', 'root', '', 'portfolioproject');

if ($conn -> connect_errno) {
    echo "Failed to connect to MySQL: " . $conn -> connect_error;
    exit();
  }

if(isset($_POST["mail-login"]) && $_POST["password-login"]){

    $login = $_POST["mail-login"];
    $password = $_POST["password-login"];

    //tutaj przy rejestracji 
    //$password = password_hash($password, PASSWORD_DEFAULT);

        //$sql = "INSERT INTO `users` (`user_Id`, `privileges_Id`, `login`, `password`) VALUES (NULL, 'NULL', '$login', '$password')";
        //$conn->query($sql);
    //---------------------------------------------

        $sql = "SELECT password from users where login = '$login'";
    
        $result = $conn->query($sql);
        $row = mysqli_fetch_assoc($result);
        $DBpassword = $row['password'];
        
        if(password_verify($password, $DBpassword)){
            echo "zalogowano";
            //przejscie do strony w react + radix ui gdzie będzie można tylko się dostać po zalogowaniu
            //require_once("admin.php");
            
        }else{
            echo "nie zalogowano";
            
        }
}

if(isset($_POST["contactEmail"]) && $_POST["contactTextArea"]){

    $mail = $_POST["contactEmail"];
    $content = $_POST["contactTextArea"];
    
        $sql = "INSERT INTO `messages` (`Id_wiadomosci`, `email_nadawcy`, `tresc`, `data_utworzenia`, `czy_wyswietlono`) VALUES (NULL, '$mail', '$content', current_timestamp(), '0')";
        if ($conn->query($sql) === TRUE) {
            //echo "dziala";
            //alert o pomyślnym wysłaniu wiadomości
            require_once("index.php");
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            ////alert o nieudanej próbie
        }
}





?>