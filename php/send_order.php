<?php

$token = "7243538546:AAGpadMB8B0_mSnr4tqpXVuOc4ggBsM-PC0";
$chat_id = "-4226805402";

$phone = ($_POST['phone']);
$theme = ($_POST['theme']);
$city = $_POST['city'];
$delivery = $_POST['delivery'];
$name = $_POST['name'];
$address = $_POST['address'];
$confirmation = $_POST['confirmation'];

$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_content = $_POST['utm_content'];
$utm_term = $_POST['utm_term'];

$arr = array(
    'Сайт:' => '',
    'Тема:' => $theme,
    'Телефон:' => $phone,
    'Населённый пункт:' => $city,
    'Способ доставки:' => $delivery,
    'Имя:' => $name,
    'Адрес:' => $address,
    'Подтверждение по телефону:' => $confirmation,
    '' => '',
    'UTM метки' => '',
    'utm_source:' => $utm_source,
    'utm_medium:' => $utm_medium,
    'utm_campaign:' => $utm_campaign,
    'utm_content:' => $utm_content,
    'utm_term:' => $utm_term,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
