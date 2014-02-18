<?php require('header.php'); ?>
<!-- commento prova con chain -->
	<div class="video step" data-section="home" data-appear-top-offset="300">
		<video id="video_background" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0" poster="videos/landoebadon.png" style="background-color: black;">
		<source src="videos/landoebadon.webm" type="video/webm">
		<source src="videos/landoebadon.mp4" type="video/mp4">
		<source src="videos/landoebadon.ogv" type="video/ogg ogv"> 
		<img src="videos/landoebadon.png" alt="Landoebadon" style="width: 600px; margin: 0 auto;"></video>
	</div>
	<header class="transition">
		<div class="logo">
			<h1 class="font-size-1">LANDOEBADON</h1>
		</div>
		<?php include('menu.php'); ?>
	</header>

	<section class="profile step" data-section="profile" data-appear-top-offset="-300" >
		<div class="wrap pad-150">
			<h1>Profile</h1>
			<p>Behind any object, dress or shoe there is much more than just the triviality of shape.<br>
Our ideas stem from a mix of values, trends and emotions. For this reason, we love to travel, observe and listen. Learn, propose and advance.</p>
		</div>
		<div class="image_wrap clearfix">
			<div class="image_container_1-3" data-type="vertical_parallax" data-speed="-3"></div>
			<div class="image_container_1-3" data-type="vertical_parallax" data-speed="-3"></div>
			<div class="image_container_1-3" data-type="vertical_parallax" data-speed="-3"></div>
		</div>
		<div class="wrap pad-150">
			<h1>Who</h1>
			<p>Through our creations we try to convey this spirit of design and purpose.
We want the result of our work to encompass thousands subtle facets; because the details make all the difference.<br>
LandoeBadon starts from here.</p>
		</div>
		<image src="img/alex_t_blur.png" width="1" height="1" border="0">
		<image src="img/marco_t_blur.png" width="1" height="1" border="0">
		<div class="image_wrap clearfix people_images">
			<div class="image_container_1-2 alex" data-type="vertical_parallax" data-speed="-3">
				<div class="bio short_transition" >
					<h2>Alex Lando</h2>
				</div>
			</div>
			<div class="outer_bio">
				<h2>Alex Lando</h2>
			</div>


			<div class="image_container_1-2 marco" data-type="vertical_parallax" data-speed="-3">
				<div class="bio short_transition">
					<h2>Marco Badon</h2>
				</div>
			</div>
			<div class="outer_bio">
				<h2>Marco Badon</h2>
			</div>
		</div>
	</section>


	<section class="services step" data-section="services" data-appear-top-offset="-300">
		<div class="wrap pad-150">

			<h1>Services</h1>
			<div class="tab_menu">
				<ul class="wrap">
					<li><a href="#" data-panel="fashion_design" title="">Design</a></li>
					<li><a href="#" data-panel="prototyping" title="">Prototyping</a></li>
					<!-- <li><a href="#" data-panel="hunting" title="">Hunting</a></li> -->
					<li><a href="#" data-panel="multimedia" title="">Multimedia</a></li>
				</ul>
			</div>
			<div class="tab_content">
				<div class="fashion_design">
					<p>An innovative approach combined with tradition allows us to work on the development of different categories of footwear, including Casual, Active, Fashion and Dress.</p>
				</div>
				<div class="prototyping">
					<p>For the realization of prototypes we employ qualified external resources, selected from a long experience.</p>
				</div>
				<!-- <div class="hunting">
					<p>Ricerca tendenze e materiali, ricerca e realizzazioni strutture...</p>
				</div> -->
				<div class="multimedia">
					<p>In addition to the primary services related to fashion design, LandoeBadon has extensive experience regarding secondary services such as graphic communication, photography, illustration, web design & development, advertising and video making.</p>
				</div>
			</div> <!-- fine tab content -->
		</div> <!-- fine wrapper -->

		<div class="tab_images image_wrap clearfix">
			<div class="image_container_1-1 fashion_design" data-type="vertical_parallax" data-speed="-3"></div>
			<div class="image_container_1-1 prototyping" data-type="vertical_parallax" data-speed="-3"></div>
			<div class="image_container_1-1 hunting" data-type="vertical_parallax" data-speed="-3"></div>
			<div class="image_container_1-1 multimedia" data-type="vertical_parallax" data-speed="-3"></div>
		</div>
	</section><!--End tabs-->


	<!-- <section class="services step" data-section="services" data-appear-top-offset="-300">
		<div class="wrap pad-150">
			<h1>Services</h1>
			<p>Pur nascendo con l’intento di fornire enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
		<div class="image_wrap clearfix">
			<div class="image_container_1-1" data-type="vertical_parallax" data-speed="-3"></div>
		</div>
	</section> -->

<?php require('footer.php'); ?>