const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const productId = document.getElementById('product_id').value;
  const content = document.getElementById('content').value;

  // Kiểm tra dữ liệu nhập vào

  if (!productId || !content) {
    alert('Vui lòng nhập đầy đủ thông tin');
    return;
  }

  // Gửi dữ liệu đến server

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'submit.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(`product_id=${productId}&content=${content}`);

  xhr.onload = () => {
    if (xhr.status === 200) {
      alert('Góp ý thành công');
      form.reset();
    } else {
      alert('Có lỗi xảy ra, vui lòng thử lại');
    }
  };
});