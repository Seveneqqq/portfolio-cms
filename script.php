<?php 

session_start(); 


$conn = new mysqli('localhost', 'root', '', 'portfolioproject');

if ($conn -> connect_errno) {
    echo "Failed to connect to MySQL: " . $conn -> connect_error;
    exit();
  }

if(isset($_POST["mail-login"]) && $_POST["password-login"]){

    $login = $_POST["mail-login"];
    $password = $_POST["password-login"];

        $sql = "SELECT password from users where login = '$login'";
    
        $result = $conn->query($sql);
        $row = mysqli_fetch_assoc($result);
        $DBpassword = $row['password'];
        
        if(password_verify($password, $DBpassword)){
            echo "zalogowano";

            //przejscie do strony w react + radix ui gdzie będzie można tylko się dostać po zalogowaniu
            //require_once("admin.php");
            
            $_SESSION['login'] = $login;
            $_SESSION['password'] = $password;
            $_SESSION['isLogged'] = true;

            header('Location: http://localhost/admin/admin.php');

        }else{
            
            //blad o blednym loginie
            header('Location: http://localhost/project/#login');
            exit;
            
        }
}

if(isset($_POST["contactEmail"]) && $_POST["contactTextArea"]){

    $mail = $_POST["contactEmail"];
    $content = $_POST["contactTextArea"];
    
        $sql = "INSERT INTO `messages` (`Id_wiadomosci`, `email_nadawcy`, `tresc`, `data_utworzenia`, `czy_wyswietlono`) VALUES (NULL, '$mail', '$content', current_timestamp(), '0')";
        
        if ($conn->query($sql) === TRUE) {

            //echo "dziala";
            //alert o pomyślnym wysłaniu wiadomości

            header('Location: http://localhost/project/#contact');
            exit;
                        
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            header('Location: http://localhost/project/#contact');
            exit;
            ////alert o nieudanej próbie
        }
}

if((isset($_POST['mail-register']) && isset($_POST['password-register']) && isset($_POST['password2-register'])) && ($_POST['password-register'] == $_POST['password2-register'])){

    $login = $_POST['mail-register'];
    $password = $_POST['password-register'];

    $password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO `users` (`user_Id`, `privileges_Id`, `login`, `password`) VALUES (NULL, '1', '$login', '$password')";

    if ($conn->query($sql) === TRUE) {
        
        //wejscie na stronę do zarzadzania
        //require_once("index.php");
        //Dialog o utworzonym koncie
        
    }
    else{
        echo "Wystąpił błąd";
        header('Location: http://localhost/project/#register');
        exit;
        //Dialog o bledzie
    } 

}

?>