window.DetailController = function ($http, $scope, $location, $routeParams) {
  const apiUrl = "http://localhost:3000/phones";
  const id = $routeParams.id;
  $http.get(`${apiUrl}/${id}`).then(function (res) {
    if (res.status == 200) {
      $scope.input = res.data;
    }
  });

  $scope.onEdit = function (id) {
    $location.path(`/edit/phone/${id}`);
  };
  $scope.onBack = function () {
    $location.path(`/list-phone`);
  };
};
