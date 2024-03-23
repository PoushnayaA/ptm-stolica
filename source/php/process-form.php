<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$email_body = "Заказ на обратный звонок. Имя: $name\nТелефон: $phone;


$to = "poushnaya@bk.ru";
$subject = "Новое сообщение с сайта";
$headers = "From: $email\r\nReply-To: $email\r\n";

if (mail($to, $subject, $email_body, $headers)) {
    echo "Сообщение успешно отправлено!";
} else {
    echo "Произошла ошибка при отправке сообщения.";
}
