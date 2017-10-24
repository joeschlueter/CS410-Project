<?php
	$db = new PDO("mysql:dbname=rent_smart;host=localhost","root");
	if(isset($_POST['search'])){
		$search = $_POST['search'];
	}
?>
	<div class="row small-up-1 medium-up-2 large-up-3">
		<?php
			foreach($rows as $row){
				$address=$row['address'];
				$price=$row['price'];
				$name=$row['name'];
				$email=$row['email'];
				$phone=$row['phone'];
				$landlord=$row['landlord'];
		?>
			<div class="column column-block">
			<div class="name">
				<p><a href="#"><?=$name?></a></p>
			</div>
				<img src="https://placehold.it/600x400" class="thumbnail" alt="">
				<div style="padding-left: 10px;">
					<p>$<?=$price?></p>
					<p><?=$address?></p>
					<p><?=$email?></p>
					<p><?=$phone?></p>
				</div>
			</div>
		<?php
			}
		?>
		</div>