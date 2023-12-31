<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio-CMS</title>
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="./style.css">
</head>
<body onload="portfolioTab()">
    
    <header class="header">
       
         <div class="banner"><span class="material-symbols-outlined">computer</span><h1>Portfolio</h1></div>
        <nav>
            <ul>
            <span class="material-symbols-outlined" id="homeLogo">home</span><li><a href="#home" onclick="changeTab('Portfolio')">Home</a></li>
                <li><a href="#projects" onclick="changeTab('Projects')">Projects</a></li>
                <li><a href="#about" onclick="changeTab('About')">About</a></li>
                <li><a href="#contact" onclick="changeTab('Contact')">Contact</a></li>
                <span class="material-symbols-outlined" id="loginsvg">login</span><li id="lastLI"><a href="#login" onclick="changeTab('Login')">Login</a></li>
            </ul>
        </nav>
        

    </header>
    
    <div class="blur"></div>

    <section>










    </section>
    
    <div class="custom-cursor"></div>
    
    <footer>

    <h6>Created by Seveneqqq</h6>

    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="./script.js"></script> 
    
    <script>

        if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
        }
        
    </script>

   

</body>
</html>