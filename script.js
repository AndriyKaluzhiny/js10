function submitFunction() {
    let userData = {
        userName: $('.userName').val(),
        userSurname: $('.userSurname').val(),
        userAge: $('.userAge').val(),
        userAddress: $('.address').val()
    };

    if (userData.userAge > 100) {
        alert('age must be less than 100');
        userData.userAge.val('');
    } else {
        $.ajax({
            type: 'GET',
            contentType: 'applicaton/json',
            url: 'http://localhost:3000/userGet?userName=' + userData.userName + '&userAge=' + userData.userAge + '&userAddress=' + userData.userAddress,
            success: function () {
                let textbox = $('.textBoxGet');
                textbox.val("GET: " + JSON.stringify(userData));
            }
        });

        $.ajax({
            type: 'POST',
            data: JSON.stringify(userData),
            contentType: 'application/json',
            url: 'http://localhost:3000/userPost',
            success: function () {
                let textBox = $('.textBoxPost');
                textBox.val("Post: " + JSON.stringify(userData));
            }
        })
    }
}