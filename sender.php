<?php

echo "<h1>da</h1>";

if (isset($_POST["name"]) == !'' && isset($_POST["phonenumber"]) == !'') { 

	// Формируем массив для JSON ответа
    // $result = array(
    // 	'name' => $_POST["name"],
    // 	'phonenumber' => $_POST["phonenumber"]
    // ); 

    // Переводим массив в JSON
    // echo json_encode($result); 
    echo 'pusk pusk';
    function file_force_download($file) {
        echo 'pusk';
        if (file_exists($file)) {
          // сбрасываем буфер вывода PHP, чтобы избежать переполнения памяти выделенной под скрипт
          // если этого не сделать файл будет читаться в память полностью!
          echo 'da';
          if (ob_get_level()) {
            ob_end_clean();
          }
          // заставляем браузер показать окно сохранения файла
          header('Content-Description: File Transfer');
          header('Content-Type: application/octet-stream');
          header('Content-Disposition: attachment; filename=' . basename($file));
          header('Content-Transfer-Encoding: binary');
          header('Expires: 0');
          header('Cache-Control: must-revalidate');
          header('Pragma: public');
          header('Content-Length: ' . filesize($file));
          // читаем файл и отправляем его пользователю
          if ($fd = fopen($file, 'rb')) {
            while (!feof($fd)) {
              print fread($fd, 1024);
            }
            fclose($fd);
          }
          exit;
        } else{
            echo 'net';
        }
    }; 



    $to = 'fallgetell@gmail.com';
    $subject = 'Данные с сайта';
    $headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
    $headers .= "From: От кого письмо <cmroonn@yandex.ru>\r\n"; 
    $headers .= "Reply-To: reply-to@example.com\r\n"; 
    $msg = "Имя: ".$_POST["name"]."<br>";$msg .= "Номер телефона: ".$_POST["phonenumber"]."\n";

    mail($to, $subject, $msg, $headers);
    file_force_download(docs.jpg);
   


} 

?>