window.ListController = function ($http, $scope, $location) {
  const apiUrl = "http://localhost:3000/phones";
  $http.get(apiUrl).then(function (res) {
    if (res.status == 200) {
      $scope.phones = res.data;
    }
  });

  $scope.onAdd = function () {
    $location.path("/phone/add");
  };
  $scope.onDetail = function (id) {
    $location.path(`/detail/phone/${id}`);
  };
  $scope.onEdit = function (id) {
    $location.path(`/edit/phone/${id}`);
  };

  $scope.onDelete = function (id) {
    if (confirm("Bạn có chắc chắn muốn xóa không?")) {
      $http.delete(`${apiUrl}/${id}`).then(function (response) {
        if (response.status == 200) {
          alert("Xóa sản phẩm thành công !");
          $http.get(apiUrl).then(function (res) {
            if (res.status == 200) {
              $scope.phones = res.data;
            }
          });
        }
      });
    }
  };
};
