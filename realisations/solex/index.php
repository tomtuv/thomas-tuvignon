<?php
$root = '../../';
$title = 'Solex';
$description = 'Site de la marque de vélos Solex.';
?>

<?php include $root . 'snippets/head.php'; ?>

<header>
	<?php include $root . 'snippets/bubbles.php'; ?>
	
	<div class="container">
		<div class="row">
			<div class="col-lg-10 offset-lg-1">
				<a href="<?php echo $root; ?>" class="back">Thomas Tuvignon</a>
				<h1><?php echo $title; ?></h1>
			</div>
		</div>
	</div>
</header>
	
<section>
	<div class="container">
		<article>
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<h2>Site de la marque de vélos Solex</h1>
					<p>Ultrō, 2018</p>
					<ul>
						<li>Kirby : développement web.</li>
					</ul>
					<a href="https://solex.world" target="_blank" class="link">Voir le site web</a>
				</div>
			</div>
			
			<div class="row">
				<div class="col-12">
					<figure data-aos="fade-up">
						<img src="solex-1.jpg">
					</figure>
				</div>
			</div>
		</article>
				
		<p><a href="<?php echo $root; ?>" class="back">Retour</a></p>
	</div>
</section>

<?php include $root . 'snippets/footer.php'; ?>