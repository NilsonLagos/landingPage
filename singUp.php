<?php
extract($_POST);
	require("connect_db.php");
	$sentencia="insert into SingUp(name,email) values('$name','$email')";
	$resent=mysqli_query($mysqli,$sentencia);	
?>