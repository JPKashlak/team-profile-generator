const generateHtml = data => {
    console.log(data)
    const dataPull = data
    const dataArray = Object.entries(dataPull)
    console.log(dataArray[0][1].constructor.name)

        
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>${dataArray[0][1].name}'s Team Profile</title>
</head>
<body>

<header class = "navbar navbar-expand-xl bg-danger justify-content-center">
    <h1 class = "text-light">${dataArray[0][1].name}'s Team</h1>
</header>

<div class = "card mx-auto">
    <div class = "card-header bg-primary text-light text-center">
        <h5 class="manaName">${dataArray[0][1].constructor.name}: ${dataArray[0][1].name}</h5>
    </div>
    <div class = "card-body bg-light text-center">
        <h6>ID: ${dataArray[0][1].id}</h6>
        <h6>Email: ${dataArray[0][1].email}</h6>
        <h6>Office Number: ${dataArray[0][1].officeNum}</h6>
    </div>
</div>



</body>
</html>
`
}

module.exports = generateHtml;