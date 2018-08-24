<?php
extract($_POST);
	require("connect_db.php");
	$sentencia="insert into Messages(name,email,comment,atomatedTestDesing,automatedTestCreation,automaticExecution,continuousIntegration) values('$name','$email','$comment','$atd','$atc','$ae','$ci')";
	$resent=mysqli_query($mysqli,$sentencia);	
?>