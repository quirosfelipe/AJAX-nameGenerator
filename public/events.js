const handleCLick = () => {
    fetch('/name')
        .then(res => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        }).then(data => {
            console.log(data.name);
            document.querySelector('h1').innerHTML = data.name;
        }).catch(err => {
            err.json().then(errorJSON => {
                console.log(errorJSON);
                document.querySelector('div').innerHTML = errorJSON.message;
            })

        })
};

document.querySelector('button').addEventListener('click', handleCLick);