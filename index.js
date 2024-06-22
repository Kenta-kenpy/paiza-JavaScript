<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
</head>
<body>
  <script>
    // JavaScriptでHTML要素を生成する
    var h1 = document.createElement('h1');
    h1.className = 'title';
    h1.textContent = 'JavaScript Paizaラーニング';
    document.body.appendChild(h1);

    var a = document.createElement('a');
    a.href = 'https://github.com/Kenta-kenpy/paiza-JavaScript';
    a.textContent = 'JavaScript　標準入力備忘録';
    document.body.appendChild(a);
  </script>
</body>
</html>
