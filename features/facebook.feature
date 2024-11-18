Feature: Visualización de Post Aleatorios en Facebook

  Scenario: Verificación de la visualización de un post aleatorio
    Given el usuario abre Facebook en un navegador
    When el usuario inicia sesión con credenciales incorrectas
    And el usuario inicia sesión con credenciales correctas
    Then debería ver el post seleccionado correctamente cargado
    And el post debería tener un "Me gusta" aplicado correctamente
