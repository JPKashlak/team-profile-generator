const generateHtml = data => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>${data[0].name}'s Team Profile</title>
</head>
<body>

<header class = "navbar navbar-expand-xl bg-danger justify-content-center">
    <h1 class = "text-light">${data[0].name}'s Team</h1>
</header>

<div class = "card mx-auto">
    <div class = "card-header bg-primary text-light text-center">
        <h5 class="manaName">${data[0].name}</h5>
    </div>
    <div class = "card-body bg-light text-center">
        <h6>ID: ${data[0].id}</h6>
        <h6>Email: ${data[0].email}</h6>
        <h6>Office Number: ${data[0].officeNum}</h6>
    </div>
</div>

</body>
</html>
`
}

module.exports = generateHtml;