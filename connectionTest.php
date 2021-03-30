<?php
$mysqli = mysqli_connect("database-1.chwphnwq8xyd.us-east-2.rds.amazonaws.com", "admin", "7^rb3Y81w", "database-1");

if (mysqli_connect_errno()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
} else {
	printf("Host information: %s\n", mysqli_get_host_info($mysqli));
}
?>