
const generateHtml = data => {  
    const dataPull = data
    const dataArray = Object.entries(dataPull)

    const managers = () => {
        var i;
        for(i = 0; i < dataArray.length; i++) {
            if (dataArray[i][1].constructor.name === 'Manager') {
                
                return `
                <div class = "card row justify-content-center my-2">
                    <div class = "card-header bg-primary text-light text-center">
                        <h5 class="manaName">${dataArray[0][1].constructor.name}: ${dataArray[0][1].name}</h5>
                    </div>
                    <div class = "card-body bg-light text-center">
                        <h6>ID: ${dataArray[0][1].id}</h6>
                        <h6>Email: <a href="mailto:${dataArray[0][1].email}">Click Here To Contact!</a></h6>
                        <h6>Office Number: ${dataArray[0][1].officeNum}</h6>
                    </div>
                </div>
            `
            }
        }
    }
    
    const engineers = () => {
        var i;
        for(i = 0; i < dataArray.length; i++) { 
            if (dataArray[i][1].constructor.name === 'Engineer') {
    
           return `
            <div class = "card row justify-content-center my-2">
                <div class = "card-header bg-primary text-light text-center">
                    <h5 class="engiName">${dataArray[i][1].constructor.name}: ${dataArray[i][1].name}</h5>
                </div>
                <div class = "card-body bg-light text-center">
                    <h6>ID: ${dataArray[i][1].id}</h6>
                    <h6>Email: <a href="mailto:${dataArray[i][1].email}">Click Here To Contact!</a></h6>
                    <h6>GitHub Username: <a href="http://www.github.com/${dataArray[i][1].github}" target="_blank">${dataArray[i][1].github}</a></h6>
                </div>
            </div>
            `    
            }
        }
    }
    
    const interns = () => {
        var i;
        for(i = 0; i < dataArray.length; i++) {
            if (dataArray[i][1].constructor.name === 'Intern') {
    
            return `
            <div class = "card row justify-content-center my-2">
                <div class = "card-header bg-primary text-light text-center">
                    <h5 class="engiName">${dataArray[i][1].constructor.name}: ${dataArray[i][1].name}</h5>
                </div>
                <div class = "card-body bg-light text-center">
                    <h6>ID: ${dataArray[i][1].id}</h6>
                    <h6>Email: <a href="mailto:${dataArray[i][1].email}">Click Here To Contact!</a></h6>
                    <h6>School: ${dataArray[i][1].school}</h6>
                </div>
            </div>
            `
            }
        }
    }

    
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

<main id="main" class="container">
    ${managers(managers)}
    ${engineers(engineers)}
    ${interns(interns)}
</main>



</body>
</html>
`
}

module.exports = generateHtml;