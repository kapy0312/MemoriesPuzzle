
$('#EmailButton').on('click', function () {

    var RequestType = 2;
    var Email_Name = $('#InputName').val();
    var Email_Address = $('#InputEmail').val();
    var Email_Contact = $('#contact_message').val();

    Email_Contact = "寄信者：" + Email_Name + "\n寄信者Email：" + Email_Address + "\n內容：\n" + Email_Contact;
    Email_Name = "回憶拼圖-系統訊息-意見回顧";
    Email_Address = "kapy0312@gmail.com"

    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbxSc25f2L-lT1yiSeekzsZJjGcnRpXyuUFDwdIiv6beTpGchTdVpc3zLXzUoOYYETlj/exec',
        type: 'POST',
        dataType: 'text',
        data: JSON.stringify({ RequestType: RequestType, Name: Email_Name, Address: Email_Address, Contact: Email_Contact }),
        contentType: 'text/plain; charset=utf-8',
        success: function (response) {
            alert(response); // 显示成功或错误消息
        },
        error: function () {
            alert('Request Failed'); // 处理错误情况
        }
    });

});