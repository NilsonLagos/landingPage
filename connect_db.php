<?php
		$mysqli = new MySQLi("host", "user","password", "database");
		$mysqli->set_charset("utf8");
		if ($mysqli -> connect_errno) {
			die( "Fallo la conexión a MySQL: (" . $mysqli -> mysqli_connect_errno() 
				. ") " . $mysqli -> mysqli_connect_error());
		}
?>