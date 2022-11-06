<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'vendor/autoload.php';



function submitEmail(){
    if(
        isset($_POST['nameInput']) && 
        isset($_POST['emailInput']) && 
        isset($_POST['titleInput']) && 
        isset($_POST['messageInput'])){
        
            
        $name = $_POST['nameInput'];
        $email = $_POST['emailInput'];
        $title = $_POST['titleInput'];
        $message = $_POST['messageInput'];

        $mail = new PHPMailer(true);

        try {
            $mail->SMTPSecure = 'tls';
            $mail->SMTPAutoTLS = false;
            $mail->SMTPDebug = 2;
            $mail->isSMTP();                                        
            $mail->Host       = 'smtp.office365.com';                     
            $mail->SMTPAuth   = true;                               
            $mail->Username   = 'yerikah05note@outlook.es';                     
            $mail->Password   = 'VAgYS2A853LfHbQ';            
            $mail->Port       = 587;     

            $mail->setFrom('yerikah05note@outlook.es', 'Send a message');
            $mail->addAddress('yerik05vh@gmail.com', 'Harvey Yerik');  
            $mail->isHTML(true);               
            $mail->Subject = $title;
            $mail->Body    = '<b>Name:</b> '.$name.'<br/><b>Correo:</b> '.$email.'<br/>'.'<b>Message: </b>'.$message;

            $mail->send();
            echo 'Message has been sent';
            header("location: sendok.php");
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }else{
        return;
    }
}
submitEmail();
