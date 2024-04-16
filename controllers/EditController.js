window.EditController = function ($http, $scope, $location, $routeParams) {
  const apiUrl = "http://localhost:3000/phones";

  const id = $routeParams.id;
  $http.get(`${apiUrl}/${id}`).then(function (res) {
    if (res.status == 200) {
      $scope.input = res.data;
    }
  });

  $scope.onSubmit = function () {
    const phoneData = {
      ...$scope.input,
    };
    $http.put(`${apiUrl}/${id}`, phoneData).then(function (res) {
      if (res.status == 200) {
        alert("Sửa điện thoại thành công !");
        $location.path("/list-phone");
      }
    });
  };
};
