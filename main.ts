let Testje = 0
matrixLidarDistance.initialize(matrixLidarDistance.Addr.Addr4, matrixLidarDistance.Matrix.X4)
matrixLidarDistance.setObstacleDistance(100)
basic.forever(function () {
    matrixLidarDistance.getData()
    Testje = matrixLidarDistance.obstacleSuggestion()
    basic.showString("" + (Testje))
})
