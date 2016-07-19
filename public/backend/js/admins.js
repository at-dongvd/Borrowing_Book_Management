$(document).ready(function(){
  $('#list_users').DataTable();
  $('#list_books').DataTable();
  $('#list_categories').DataTable();
});
$('.img_upload').hide();
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_no').show();
            $('#image_no').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#image").change(function(){
    readURL(this);
});

