<head>
    <link rel="stylesheet" href="style.css">
    <script src="out/production/flex-arrange/lib/kotlin.js"></script>
    <script src="out/production/flex-arrange/flex-arrange.js"></script>

    <style>
        .item--yellow {
            background: yellow;
            display: block;
            height: 50px;
            width: 200px;
            margin: 5px;
        }

        .item--red {
            background: red;
            display: block;
            height: 50px;
            width: 200px;
            margin: 5px;
        }
    </style>
</head>
<body>

<div style="background: #55acee;">

    <flex-arrange>
        <div class="item--red">A</div>
        <div class="item--yellow">A</div>
        <div class="item--red">A</div>
        <div class="item--yellow">A</div>
    </flex-arrange>
</div>

</body>