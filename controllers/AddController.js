window.AddController = function ($http, $scope, $location) {
  const apiUrl = "http://localhost:3000/phones";

  $scope.onSubmit = function () {
    const newPhone = {
      ...$scope.input,
    };
    $http.post(apiUrl, newPhone).then(function (res) {
      if (res.status == 201) {
        alert("Thêm điện thoại thành công !");
        $location.path("/list-phone");
      }
    });
  };
};
