<?php
		$mysqli = new MySQLi("localhost", "muuktestCRM","Q4{0n6@#r;9g", "muuktestCRM");
		$mysqli->set_charset("utf8");
		if ($mysqli -> connect_errno) {
			die( "Fallo la conexión a MySQL: (" . $mysqli -> mysqli_connect_errno() 
				. ") " . $mysqli -> mysqli_connect_error());
		}
?>