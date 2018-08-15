<?php
extract($_POST);
	require("connect_db.php");
	$sentencia="insert into LandingPage(name,email,origin) values('$name','$email','$origin')";
	$resent=mysqli_query($mysqli,$sentencia);	
?>