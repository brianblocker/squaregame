<!DOCTYPE HTML>
<!--[if lt IE 7]><html class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html class=""><!--<![endif]-->
<head>
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- could combine the bootstrap CSS files, if we're always going to use both -->
	<link rel="stylesheet" href="_css/bootstrap.min.css" />
	<link rel="stylesheet" href="_css/bootstrap-responsive.min.css" />

	<link rel="stylesheet" href="_css/style.css" />

	<title>A Game of Squares</title>

</head>
<body>

	<div class="container">
		<div class="row-fluid">
			<div id="game"></div>
		</div>

	</div>

	<div id="buttons"></div>
	
	<!-- could pull from a CDN like google's to make it load faster -->
	<script src="_js/jquery.js"></script>

	<script src="_js/modernizr.min"></script>
	<script src="_js/underscore.min.js"></script>
	<script src="_js/backbone.min.js"></script>
	<script src="_js/core.js"></script>
	<script src="_js/square-model.js"></script>
	<script src="_js/square-collection.js"></script>
	<script src="_js/banner-view.js"></script>
	<script src="_js/square-view.js"></script>
	<script src="_js/square-list-view.js"></script>
	<script src="_js/script.js"></script>

</body>
</html>